import   pluralize    from 'pluralize'
import   changeCase   from 'change-case'
import { consola    } from '../../logger.mjs'


export const setPartnerSchema = async(req, res, next)  =>{
  // consola.warn('Middleware: setPartnerSchema')

  const { $context } = req
  
  $context.schema = $context.config.get('jsonSchema')

  return next()
}

export const setPartnerSchemaRoute = async(req)  =>{
  // consola.warn('Middleware: setPartnerSchema')

  setClass(req)
  setParam(req)
}


export const getJsonSchemaClass = async ({ config, className, propName  }) => {
  const schemas = config.get('jsonSchema')
  const title   = propName || className

  for (const aSchema of schemas)
    if(aSchema.title === title)
      return aSchema
  
  consola.fatal(`No class found: ${title}`)
  throw new Error(`No class found: ${title}`)
}

function setClass({ params, body, $context }){
  consola.info('setClass', getClassFromParams(params) || body['@type'])
  $context.className     = getClassFromParams(params) || body['@type']

  if(!$context.className) return false
  $context.classChildren = classChildren($context) || []
}

async function setParam(req){
  const { params, $context } = req

  $context.propName = getPropFromParams(params)
  // $context.schema   = await getJsonSchemaClass($context)
  // if(isSchema(req)) return next()
  return !!$context.propName
}

function classChildren({ className, config }){
  const aClassChildMap = config.get('sdo').getClass(className)?._children
  const result         = []

  if(!aClassChildMap) return []

  result.push(...Array.from(aClassChildMap.keys()))

  for (const childClass of aClassChildMap.keys())
    result.push(...classChildren({ className:childClass, config }))

  return result
}

function getClassFromParams(params){

  if(!params.className) return
  if(getExceptions().has(params.className)) return getExceptions().get(params.className)
  return changeCase.pascalCase(pluralize.singular(params.className))
}

function getPropFromParams(params){
  if(!params.prop) return
  return params.prop
}


const exceptions = new Map()
exceptions.set('URL' , 'URL')
exceptions.set('URLs', 'URL')
exceptions.set('url' , 'URL')
exceptions.set('urls', 'URL')
exceptions.set('Url', 'URL')

exceptions.set('NGO', 'NGO')
exceptions.set('Ngo', 'NGO')
exceptions.set('NGOs', 'NGO')
exceptions.set('ngos', 'NGO')

exceptions.set('NOORG', 'NOORG')
exceptions.set('NOORGS', 'NOORG')
exceptions.set('Noorg', 'NOORG')
exceptions.set('Noorgs', 'NOORG')
exceptions.set('noorgs', 'NOORG')
exceptions.set('noorg', 'NOORG')
exceptions.set('NOORGs', 'NOORG')

exceptions.set('IPLC', 'IPLC')
exceptions.set('IPLCS', 'IPLC')
exceptions.set('iplc', 'IPLC')
exceptions.set('iplcs', 'IPLC')
exceptions.set('Iplc', 'IPLC')
exceptions.set('Iplcs', 'IPLC')
exceptions.set('IPLCS', 'IPLC')

exceptions.set('IGO', 'IGO')
exceptions.set('IGOS', 'IGO')
exceptions.set('igo', 'IGO')
exceptions.set('igos', 'IGO')
exceptions.set('Igo', 'IGO')
exceptions.set('Igos', 'IGO')
exceptions.set('IGOS', 'IGO')

function getExceptions(){


  return exceptions
}