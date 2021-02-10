import { SDO        } from '@houlagins/schema-dot-organizer' //loadGraph , getClassNames, getPropNames
import   superagent   from 'superagent'
import   getOptions   from '../default-options.mjs'
import   fs           from 'fs-extra'
import   changeCase   from 'change-case'
import { consola    } from './logger.mjs'
import   AJV          from 'AJV'
import   pluralize    from 'pluralize'
import   mergePatch   from 'ajv-merge-patch'


import * as SchemaModule from '@action-agenda/schema'

const globals          = new Map()
const configsSourceMap = new Map()

export const partnerIdentifiers = [ 'system', 'scbd', 'wcmc' ]

//TODO ensure context is not overwritten by async api requests
export const setPartnerContext = (partnerIdentifier) => {
  if(!partnerIdentifiers.includes(partnerIdentifier)) throw new Error(`Partner identifier not permitted: ${partnerIdentifier}`)

  globals.set('partnerContext', partnerIdentifier)
}
export const getConfig = () => getPartnerConfig(globals.get('partnerContext')); 

export const getClassFilterRegexString = createClassFilterRegexString
export const getPropsFilterRegexString = createPropFilterRegexString

initSchemasSourceMap()

async function getPartnerConfig(name = 'base'){



  if(name != 'base' && !partnerIdentifiers.includes(name)) throw new Error(`getSchema: Partner identifier not permitted: ${name}`)

  // loadParnter
  // loadBase
  // merge partner over base
  // return merge

  return loadAConfig('base')
}

async function loadAConfig(name){
  //if(!isSchemaExpired(name)) return globals.get(name)

  const   sdo         = new SDO()
  const { paramCase } = changeCase
  const   fileName    = `/tmp/tmp-${paramCase(name)}.mjs`
  const   data        = await readFile(name)

  fs.writeFileSync(fileName, data)

  const   config                    = new Map()
  const { getJsonSchema, getGraph, getSdoConfig } = (await import(fileName))
  
  if(getJsonSchema) config.set('jsonSchema', SchemaModule.getJsonSchema())
  if(getGraph)      config.set('graph', SchemaModule.getGraph())
  //if(getSdoConfig)     
  config.set('sdoConfig', SchemaModule.getSdoConfig())
  
  await sdo.loadGraph(SchemaModule.getGraph())

  config.set('sdo', sdo)


  // schema.set('classNames', getClassNames())
  // schema.set('propNames', getPropNames())
  config.set('lastCached', new Date(new Date().getTime()+5*60*1000))

  const validator = new AJV({allErrors: true, verbose: true, extendRefs: 'fail', useDefaults: 'empty'})//, useDefaults: 'empty' removeAdditional: 'true'
  const jSchema   = SchemaModule.getJsonSchema()

  mergePatch(validator)
  validator.addSchema(jSchema)

  config.set('validator', validator)

  globals.set(name, config)
  
  return config
}

async function createPropFilterRegexString(){
  // TODO get prop names of every partner then create a set
  const config    = await getConfig()//getSchema()
  const propNames = config.get('sdo').propNames

  let regExString = ''

  for (const name of propNames ) {
    if(!regExString) regExString = name
    else regExString = `${regExString}|${name}`
  }

  return regExString
}

async function createClassFilterRegexString(){
  // TODO get classnames of every partner then create a set
  const { paramCase } = changeCase
  const config     = await getConfig()//await loadSchema('base')//getSchema()
  const classNames = config.get('sdo').classNames

  let regExString = 'URL|URLs|url|urls|Email|Emails|email|emails';

  for (const name of classNames) {
    if(!regExString) regExString = `${name}|${pluralize(name)}|${pluralize(paramCase(name))}`
    else regExString = `${regExString}|${name}|${pluralize(name)}|${pluralize(paramCase(name))}`
  }

  return regExString 
}

function isSchemaExpired(name){
  if(!globals.has(name)) return true

  const schema = globals.get(name)

  if(!schema.has('lastCached')) return true

  if(new Date() > schema.get('lastCached')) return true

  return false
}

function initSchemasSourceMap(){
  const { cdn } = getOptions()

  configsSourceMap.set('base', `${cdn}/@action-agenda/schema@2.0.0-alpha.2`)
}

function readFile(name){
  const url = configsSourceMap.get(name)

  try {
    return (superagent.get(url)
    .accept('application/json'))
    .then(({ body }) => body.toString('utf8'))
  } catch (e){
    consola.error(e)
  }
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}