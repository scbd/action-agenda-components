import isPlainObject from 'lodash.isplainobject'
import getOptions    from '../../../default-options.mjs'
import superagent    from 'superagent'

import { isClassOrChildOfClass } from '../post-put-util.mjs'
import { consola               } from '../../logger.mjs'
import { notFound              } from '../../http-responses.mjs'

import { getCollection, isMongoIdHexString , ObjectID } from '../../mongo/index.mjs'

export const getDoc = async (identifier)=>{

  const collection = await getCollection('')

  identifier = parseId(identifier)

  const doc = await collection.findOne({ 'identifier.value': identifier })

  if(isMongoIdHexString(doc._id)) doc._id = new ObjectID(doc._id)

  return doc
}

export const unique = (array) => {
  return Array.from(new Set(array.map((el)=>{ if(isPlainObject(el)) return JSON.stringify(el); else return el}))).map(jsonParse)
}

export const isRefInArray = (ref, anArray) => {
  if(!ref?._id) throw new Error(`controllers.post.postsRefInArray ref has no _id`)
  if(!Array.isArray(anArray)) return false

  for (const aRef of anArray)
    if(`${ref._id}` === `${aRef._id}`)
      return true
  
  return false
}

export const classInstanceToRef = (classInstance) => {
  return { _id: classInstance._id, '@context': classInstance['@context'], '@type': classInstance['@type'] }
}

export const getDocs = async (req, res, type='Place')=>{
  const { params } = req
  const { identifier, placeIdentifier, organizationIdentifier } = params
  const isPlace =  type === 'Place'
  const isOrg   =  type === 'Organization'

  if(!identifier) return notFound(req, res, ` => identifier: ${identifier}`)

  const self         = await getDoc(identifier) 

  if(!self ) return notFound(req, res, ` => identifier: ${identifier}`)

  if(isPlace && !placeIdentifier) return notFound(req, res, ` => placeIdentifier: ${placeIdentifier}`)
  if(isOrg && !organizationIdentifier) return notFound(req, res, ` => organizationIdentifier: ${organizationIdentifier}`)

  const place        = isPlace ? await getDoc(placeIdentifier)       : undefined
  const organization = isOrg   ? await getDoc(organizationIdentifier): undefined

  if(isPlace && !place) return notFound(req, res, ` => placeIdentifier: ${placeIdentifier}`)
  if(isOrg && !organization) return notFound(req, res, ` => placeIdentifier: ${organizationIdentifier}`)

  if(!isClassOrChildOfClass(type, self['@type'], req.$context )) return notFound(req, res, ` => @type: ${self['@type']} expectedOrChildOf:${type}`)
  if(isPlace && !isClassOrChildOfClass(type, place['@type'], req.$context )) return notFound(req, res, `  => @type: ${place['@type']} expectedOrChildOf:${type}`)
  if(isOrg   && !isClassOrChildOfClass(type, organization['@type'], req.$context )) return notFound(req, res, `  => @type: ${organization['@type']} expectedOrChildOf:${type}`)

  return { self, place, organization }
}

export const postAction = async ({ $context }, action, self, place) => {
  const permittedActions = [ 'containedInPlace', 'containsPlace' ]

  if(!permittedActions.includes(action)) throw new Error(`Action '${action}' not permitted.  Must be one of ${JSON.stringify(permittedActions)}`)

  const { _id:     identifier        } = self
  const { _id:     placeIdentifier   } = place
  const { token,   partnerIdentifier } = $context
  const { selfUrl, basePath          } = getOptions()

  return superagent.post(`${selfUrl}${basePath}/${identifier}/${action}/${placeIdentifier}`)
    .set('Authorization',     `Token ${token}`)
    .set('partner-identifier', partnerIdentifier)
    .set('Accept',             'application/json')
    .type('json')
    .then(res => res.body)
}

export const update = async({ $context }, self ) => {
  const { _id:     identifier        } = self
  const { token,   partnerIdentifier } = $context
  const { selfUrl, basePath          } = getOptions()

  return superagent.put(`${selfUrl}${basePath}/${identifier}`)
    .set('Authorization',     `Token ${token}`)
    .set('partner-identifier', partnerIdentifier)
    .set('Accept',             'application/json')
    .type('json')
    .send(self)
    .then(res => res.body)
}

export const updateArrayProp =  async ({ $context }, propName, parent, child)=>{
  const ref = classInstanceToRef(child)

  if(!parent[propName]) parent[propName] = [ref]
  else parent[propName].push(ref)

  parent[propName] = unique(parent[propName])

  return update({ $context }, parent)
}

function parseId( identifier ) {

  try {
    if(!isMongoIdHexString(identifier))
      return new RegExp(`^${escapeRegExp(identifier)}$`, 'i')

    return new ObjectID(identifier)
  } catch (e) {
    consola.error(e)
  }
}

function jsonParse(el){ try{ return JSON.parse(el); }catch(e){ return el; } }

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}