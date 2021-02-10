import superagent from 'superagent'
import slug       from 'limax'
import changeCase from 'change-case'
import getOptions from '../../default-options.mjs'
import isEmpty    from 'lodash.isempty'
import hasher     from 'object-hash'

import { consola       } from '../logger.mjs'
import { getCollection } from '../mongo/connection.mjs'

import { isMongoIdHexString, isMongoId, ObjectID, createFromHexString } from '../mongo/index.mjs'
import isPlainObject from 'lodash.isplainobject'

export const processSubClasses     = processSubClassesForPutOrPost
export const parseIdentifier       = parseIdentifierFunc
export const isClassOrChildOfClass = isClassOrChild
export const isRef                 = isRefFunc // data a Ref class
export const buildSlugIdentifiers  = buildSlugIdentifiersFunc // create i18n slugs of data objects name

export const  moveUploads          = (req, res, next) => { return next()}

async function processSubClassesForPutOrPost(req, res){
  const { body, $context }    = req
  const   sdo                 = $context.config.get('sdo')
  const   propsWithClassesMap = sdo.getPropsWithClassesFromClass($context.className)
  const   propsWithClasses    = propsWithClassesMap? Array.from(propsWithClassesMap.keys()) : []
  const   propsToProcess      = Object.keys(body).filter(p => propsWithClasses.includes(p))

  if(!propsToProcess.length) return {}

  const promiseMap = new Map()

  for (const prop of propsToProcess) {                  // create put/post promises
    const possibleClasses = propsWithClassesMap.get(prop)

    if(!isPlainObject(body[prop])) continue
if(prop === 'mainEntityOfPage'){
consola.error('prop',prop)
consola.warn(prop, body[prop])
consola.error('possibleClasses', possibleClasses)
consola.warn('do.metaIsA(possibleClasses[0])', sdo.metaIsA(possibleClasses[0]))
// process.exit(-1)
}
    if(possibleClasses.length == 1 && 'Class' === sdo.metaIsA(possibleClasses[0])) 
      if(Array.isArray(body[prop]) )
        promiseMap.set(prop, processPropArray(req, possibleClasses[0], body[prop]))
      else
        promiseMap.set(prop, processPropClass(req, possibleClasses[0], body[prop]))
    else{
      if(Array.isArray(body[prop]))
        promiseMap.set(prop, processPropArrayMultiple(req, possibleClasses, body[prop]))
      else
        for (const possibleClass of possibleClasses)  // I don't like this, should be easier
          if(isClassOrChild(possibleClasses, body[prop]['@type'], $context) && possibleClass === body[prop]['@type'])
            if('Class' === $context.config.get('sdo').metaIsA(possibleClass))
              promiseMap.set(prop, processPropClass( req, possibleClass, body[prop]))
    }
  }

  return resolvePromisesMap(promiseMap)
}

async function resolvePromisesMap(promiseMap){

    await Promise.all(promiseMap.values()) // wait for all promises to resolve

    for (const [ key, value ] of promiseMap) {
      const promiseResponse = await value

      if(Array.isArray(promiseResponse)) {
        for (const anItem of promiseResponse) {
          const { _id, identifier } = anItem

          if(_id && isMongoIdHexString(_id))               anItem._id        = createFromHexString(_id)
          if(identifier && isMongoIdHexString(identifier)) anItem.identifier = createFromHexString(identifier)
        }

        promiseMap.set(key, promiseResponse)
        continue
      }

      const { '@context': context, '@type': type, _id } = promiseResponse

      if(_id && isMongoIdHexString(_id))    promiseResponse._id  = createFromHexString(_id)

      promiseMap.set(key, { '@context': context, '@type': type, _id})
    }

    return Array.from(promiseMap.entries()).reduce((main, [key, value]) => ({...main, [key]: value }), {})
}

async function processPropClass(req, className, body){
  const isPut = !!body._id

  if(isRef(body)) return mongofyRefData(req, body)

  consola.warn(className, body)
  
  return isPut? putPropClass(req, className, body) : postPropClass(req.$context, className, body)
}

async function processPropArray( req, possibleClass, propArray){
  const { config          } = req.$context
  const   postPromisesArr   = []

  for (const item of propArray){
    const className = item['@type']

    if(isClassOrChild([possibleClass], className, req.$context)) //    else if(possibleClass === item ['@type'] || sdo.isChild(possibleClass, item ['@type'] ))
      postPromisesArr.push(processPropClass(req, possibleClass, item))
  }
  return Promise.all(postPromisesArr)
}

async function processPropArrayMultiple(req, possibleClasses, propArray){
  const { $context } = req
  const   sdo        = $context.config.get('sdo')

  const postPromisesArr = []

  for (const item of propArray){
    const className = item['@type']

    if(isClassOrChild(possibleClasses, className, req.$context) && sdo.metaIsA(className) === 'Class')
      postPromisesArr.push(processPropClass(req, className, item))
  }

  return Promise.all(postPromisesArr)
}

//TODO add className for faster puts
function putPropClass({ $context }, manualClassName, body ){
    const { _id: identifier, '@type': className         } = body
    const { token,      partnerIdentifier } = $context
    const { selfUrl,    basePath          } = getOptions()
    const   classPath                       = className || manualClassName? `/${className || manualClassName}` : ''

    return superagent.put(`${selfUrl}${basePath}/${identifier}`)
      .set('Authorization', `Token ${token}`)
      .set('partner-identifier', partnerIdentifier)
      .set('Accept', 'application/json')
      .type('json')
      .send(body)
      .then(res => res.body)
}

function postPropClass({ token, partnerIdentifier }, className, body){
    const { selfUrl, basePath } = getOptions()

    return superagent.post(`${selfUrl}${basePath}/${className}`)
      .send(body)
      .set('Authorization', `Token ${token}`)
      .set('partner-identifier', partnerIdentifier)
      .set('Accept', 'application/json')
      .then(res => res.body)
}

function isRefFunc (classData={}) {
  const keys = Object.keys(classData)

  return (keys.length >= 2 && keys.length <= 3) && keys.includes('@type') && (keys.includes('_id') || keys.includes('identifier'))
}

async function parseIdentifierFunc(req, res, next){
  const { body      , params, $context } = req
  const { identifier                   } = params

  if(isMongoIdHexString(identifier)) params.identifier = new ObjectID(identifier)

  if($context.isPut) await storePrevVersionInContext(req)

  if(!$context.isPost) return next()

  body._id = ObjectID.createPk()
  if(!body.identifier)body.identifier = []
  body.identifier = buildSlugIdentifiers($context, body)
  body.identifier.push({ propertyID: '_id', value: body._id, '@context': 'https://schema.org', '@type': 'PropertyValue' })

  return next()
}

async function storePrevVersionInContext({ params, body, $context }){
  const collection  = await getCollection()

  if(isMongoIdHexString(body._id)) body._id = new ObjectID(body._id)

  $context.originalDoc = await collection.findOne({ 'identifier.value': params.identifier })

  if($context?.originalDoc?.identifier) body.identifier = Array.from(new Set([...$context.originalDoc.identifier, ...(body.identifier || [])].filter(i => i.propertyID !== '_id').map(i => JSON.stringify(i)))).map( i=> JSON.parse(i))

  body.identifier.push({ propertyID: '_id', value: body._id, '@context': 'https://schema.org', '@type': 'PropertyValue' })
}

async function mongofyRefData(req, refData){
  //if(!refData._id) throw new Error(`PostPutUtil.mongofyRefData: No _id found`)

  if(isMongoId(refData._id)) return refData

  if(isMongoIdHexString(refData._id))
    refData._id = new ObjectID(refData._id)

  if(!refData._id && !refData.identifier) throw new Error('Malformed Ref Object cannot derive _id')
  
  if(!refData._id) refData = await getMongoIdFromIdentifier(req, refData)

  return refData
}

async function getMongoIdFromIdentifier({ $context },  { identifier }){
  if(isMongoId(identifier)) return identifier

  if(isMongoIdHexString(identifier)) return new ObjectID(identifier)


  const { '@context': context, '@type':type ,_id } = await getRefId({ $context }, identifier)

  if(!_id) throw new Error('getMongoIdFromIdentifier: Ref not found by identifier')

  return { '@context': context, '@type':type ,_id } 
}

const classAbbreviationMap = new Map()



function isClassOrChild (possibleClasses, className, $context) {
  const { config }   = $context
  const   sdo        = config.get('sdo')
  const   theClasses = Array.isArray(possibleClasses)? possibleClasses : [possibleClasses]

  if(theClasses.includes(className)) return true

  for (const possibleClass of theClasses)
    if(sdo.isChild(possibleClass, className)) return true
  
  return false
}


function getClassAbbreviation(className){
  if(classAbbreviationMap.has(className)) return classAbbreviationMap.get(className)

  return className
}

export const getRefId = ({ $context }, identifier) => {
  const { token,   partnerIdentifier } = $context
  const { selfUrl, basePath          } = getOptions()

  try {
    return superagent.get(`${selfUrl}${basePath}/${identifier}`)
    .accept('application/json')
    .set('Authorization', `Token ${token}`)
    .set('partner-identifier', partnerIdentifier)
    .then(({ body, text }) => isEmpty(body)? JSON.parse(text) : body)

  } catch (e){
    consola.error('', e)
    throw e
  }
}

function buildSlugIdentifiersFunc({ className }, body){
  const { identifier, name } = body

  if(className==='Person') return buildSlugIdentifiersPerson(body)
  if(!name) return identifier || []

  const identifierMap = new Map()

  for (const proValue of identifier || [])
    identifierMap.set(proValue.propertyID, proValue)

  for (const localeName in name){
    if(![ '@context', '@type' ].includes(localeName) && !identifierMap.has(`slug-${localeName}`)){
      if(classAbbreviationMap.has(className))
        identifierMap.set(`slug-${localeName}-abr`, { propertyID:`slug-${localeName}`, value:slug(`${name[localeName]}-${getClassAbbreviation(className)}`), '@context': 'https://schema.org', '@type': 'PropertyValue' })
      else
        identifierMap.set(`slug-${localeName}`, { propertyID:`slug-${localeName}`, value:slug(`${name[localeName]}-${changeCase.paramCase(className)}`), '@context': 'https://schema.org', '@type': 'PropertyValue' })
    }
  }
  return unique(Array.from(identifierMap.values()))
}
//  const hash        = hasher(JSON.stringify(docClone))

function buildSlugIdentifiersPerson({ identifier, name, email }){

  if(!email || !email['@value']) return identifier || []
  const identifierMap = new Map()

  for (const proValue of identifier || [])
    identifierMap.set(proValue.propertyID, proValue)

  const newIdentifiers = []
  const hash           = hasher(email['@value'])

  newIdentifiers.push( { propertyID:`emailHashSha1`, value:hash, '@context': 'https://schema.org', '@type': 'PropertyValue' })

  for (const localeName in name){
    if(![ '@context', '@type' ].includes(localeName))
      newIdentifiers.push( { propertyID:`slug-${localeName}`, value:slug(`${name[localeName]}-person-${hash}`), '@context': 'https://schema.org', '@type': 'PropertyValue' })
  }
  return unique([...Array.from(identifierMap.values()), ...newIdentifiers ])
}

function unique (array) {
  return Array.from(new Set(array.map((el)=>{ if(isPlainObject(el)) return JSON.stringify(el); else return el}))).map(jsonParse)
}
function jsonParse(el){ try{ return JSON.parse(el); }catch(e){ return el; } }

classAbbreviationMap.set('Organization'      , 'org')
classAbbreviationMap.set('OrganizationSize'  , 'org-size')
classAbbreviationMap.set('StructuredValue'   , 'structured-val')
classAbbreviationMap.set('AdministrativeArea', 'admin-area')

classAbbreviationMap.set('ProgramMembership'     , 'prog-mbrshp')
classAbbreviationMap.set('GovernmentOrganization', 'gov-org')
classAbbreviationMap.set('Association'           , 'assoc')
