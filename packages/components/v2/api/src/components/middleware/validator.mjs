import { getConfig } from '../partner-config.mjs'
import { consola   } from '../logger.mjs'

import { invalidParameter, mandatory, badRequest } from '../http-responses.mjs'

export const validate = async ( req, res, next) => {
  try{
    const { body, $context }  = req

    consola.validation('$context.className', $context.className)
    
    const validator = (await getConfig()).get('validator')


    const className = $context.className || body['@type']
    const schema$id = await makeIdURI(className)//`https://cdn.cbd.int/@action-agenda/schema/dist/classes/${className}.mjs`

    if(validator.validate(schema$id, body)) return next()

    consola.validation('body', body)
    consola.validation('validator.errors', validator.errors)

    const errors = (validator.errors || []).filter(e => e.keyword != '$merge')
    
    const { keyword, dataPath, data, message, params } = errors[0]

    if(keyword === 'additionalProperties')
      return invalidParameter(req, res,`${$context.className}${dataPath}${dataPath}`, `${message}: '${data}'`, errors.reverse() )

    if(keyword === 'type')
      return invalidParameter(req, res,`${$context.className}${dataPath}${dataPath}`, `${message}: '${data}'`, errors.reverse() )

    if(keyword === 'format')
      return invalidParameter(req, res,`${$context.className}${dataPath}${dataPath}`, `${message}: '${data}'`, errors.reverse() )

    if(keyword === 'minLength')
      return invalidParameter(req, res,`${$context.className}${dataPath}${dataPath}`, `${message}: '${data}'`, errors.reverse() )

    if(keyword === 'maxLength')
      return invalidParameter(req, res,`${$context.className}${dataPath}${dataPath}`, `${message}: '${data}'`, errors.reverse() )

    if(keyword === 'required')
      return mandatory(req, res,`${$context.className}${dataPath}.${params.missingProperty}`, `Class ${$context.className}${dataPath} ${message}.`)

    return badRequest(req, res, 'multiple errors', errors.reverse() ) // reverse as the first failure is pushed into array so most relevant is now first
  }catch(e){
    consola.error('validate-middleware', e)
    next()
  }
}

const sdoMetaToConfigMap = new Map()

sdoMetaToConfigMap.set('Class', 'classesId')
sdoMetaToConfigMap.set('Enum', 'enumClassesId')

async function makeIdURI(className){
  const sdoConfig = (await getConfig()).get('sdoConfig')
  const sdo       = (await getConfig()).get('sdo')
  const metaType  = sdo.metaIsA(className)
  const configKey = sdoMetaToConfigMap.get(metaType)
  const pathStart = sdoConfig[configKey]

  return `${pathStart}/${className}.mjs`
}