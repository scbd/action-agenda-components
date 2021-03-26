import { SDO        } from '@houlagins/schema-dot-organizer' //loadGraph , getClassNames, getPropNames
import { consola    } from './logger.mjs'
import   superagent   from 'superagent'
import   getOptions   from '../default-options.mjs'
import   fs           from 'fs-extra'
import   changeCase   from 'change-case'
import   AJV          from 'AJV'
import   pluralize    from 'pluralize'
import   mergePatch   from 'ajv-merge-patch'

import   * as config from '@action-agenda/default-config'

const globals          = new Map()
const configsSourceMap = new Map()

initSchemasSourceMap()

//TODO ensure context is not overwritten by async api requests
export const setPartnerContext = (partnerIdentifier) => {
  const { partnerIdentifiers } = config

  if(!partnerIdentifiers.includes(partnerIdentifier)) throw new Error(`Partner identifier not permitted: ${partnerIdentifier}`)

  globals.set('partnerContext', partnerIdentifier)
}
export const getConfig                 = (key) => getPartnerConfig(key || globals.get('partnerContext')); 
export const getClassFilterRegexString = createClassFilterRegexString
export const getPropsFilterRegexString = createPropFilterRegexString
export const partnerIdentifiers        = config.partnerIdentifiers


async function getPartnerConfig(name = 'base'){
  const { partnerIdentifiers } = config

  if(name != 'base' && !partnerIdentifiers.includes(name)) throw new Error(`getSchema: Partner identifier not permitted: ${name}`)

  // loadParnter
  // loadBase
  // merge partner over base
  // return merge

  return loadAConfig('base')
}

async function loadAConfig(name){
  if(!isSchemaExpired(name)) return globals.get(name)

  const sdo    = new SDO()
  const config = new Map()

  const { getJsonSchema, getGraph, getSdoConfig } = await getRemoteConfig(name)
  
  if(getJsonSchema) config.set('jsonSchema', getJsonSchema())
  if(getGraph)      config.set('graph',      getGraph())
  if(getSdoConfig)  config.set('sdoConfig',  getSdoConfig())
  if(getGraph)      await sdo.loadGraph(getGraph())

  config.set('sdo', sdo)
  config.set('lastCached', new Date(new Date().getTime()+5*60*1000))

  const validator = new AJV({allErrors: true, verbose: true, extendRefs: 'fail', useDefaults: 'empty'})//, useDefaults: 'empty' removeAdditional: 'true'
  const jSchema   = getJsonSchema()

  mergePatch(validator)
  validator.addSchema(jSchema)

  config.set('validator', validator)

  globals.set(name, config)
  
  return config
}

async function createPropFilterRegexString(){
  const config    = await getConfig()
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
  const   config      = await getConfig()//await loadSchema('base')//getSchema()
  const   classNames  = config.get('sdo').classNames

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

  configsSourceMap.set('base', `${cdn}/@action-agenda/default-config`)
}

function readRemoteFile(name){
  const url = configsSourceMap.get(name)

  try {
    return (superagent.get(url)
    .accept('application/json'))
    .then(({ body }) => body.toString('utf8'))
  } catch (e){
    consola.error(e)
  }
}

async function getRemoteConfig(name){
  if(name === 'base') return config

  const { paramCase } = changeCase
  const   fileName    = `/tmp/tmp-${paramCase(name)}.mjs`
  const   data        = await readRemoteFile(name)

  fs.writeFileSync(fileName, data)

  return import(fileName)
}