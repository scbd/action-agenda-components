import   Express                                           from 'express'
import { processSubClasses, parseIdentifier, moveUploads } from './post-put-util.mjs'
import { getDoc } from './actions/util.mjs'
// import   isPlainObject  from 'lodash.isplainobject';
// import superagent from 'superagent'
// import getOptions from '../../default-options.mjs'
// import   Mongo      from 'mongodb'

// import { processSubClasses, parseIdentifier, moveUploads, isClassOrChildOfClass} from './post-put-util.mjs'
// import { isMongoIdHexString, isMongoId, ObjectID, createFromHexString, createPk } from '../mongo/index.mjs'
// import slug       from 'limax'
// import superagent from 'superagent'
// import getOptions from '../../default-options.mjs'
// import { notFound                                        } from '../http-responses.mjs'

import { consola                                         } from '../logger.mjs'
import { getCollection                                   } from '../mongo/index.mjs'
import { invalidParameter          , internalServerError, notModified } from '../http-responses.mjs'
import { getClassFilterRegexString                       } from '../partner-config.mjs'

import { useCommonToAllMiddleware, meta, validate, parseRouteContext, versioning } from '../middleware/index.mjs'

export const loadPostRoute = async (router = Express.Router()) => {

  const allClasses = await getClassFilterRegexString()

  router.post (`/:className(${allClasses})`, ...useCommonToAllMiddleware(), parseRouteContext, validate,   parseIdentifier, meta, moveUploads, post, versioning )

  return router
}

async function post (req, res, next) {
  const { body, $context } = req
  try {
    consola.controller('post')

    const exists = await documentExists(body.identifier)

    if(exists)
      return notModified(res, exists)

    const collection      = await getCollection()
    const newBody         = { ...body, ...(await processSubClasses(req, res)) }


    $context.operationClone = newBody

    const { result, ops } = await collection.insertOne(newBody)

    if(result.ok!=1 || result.n!=1) throw new Error('failed to post/insert document');

    const { '@context': context, '@type': type, _id } = ops[0]

    res.status(200).send({ '@context': context, '@type': type, _id })

    next()
  }
  catch(e){
    if(e.message.includes('E11000 duplicate key error')){

      return notModified(res, (await returnRef(e.keyValue['identifier.value'])))
    }

    if(e.response?.body && Object.keys(e.response?.body).length){
      consola.error('=========', e.response.body)
      consola.error('=========', e.response.request.url)
      return invalidParameter(req, res, e.response.body.field,e.response.message ,e.response.body.errors )
    }

    consola.error('failed to post/insert document',e)
    return internalServerError(req, res)
  }
}


async function returnRef(identifier){

  const { '@context': context, '@type':type ,_id } = await getDoc(identifier)

  return { '@context': context, '@type':type ,_id }
}

async function documentExists(identifier){
  const collection = await getCollection()
  const $in        = identifier.map(({ value })=> value)
  const query      = { 'identifier.value': { $in }}

  return collection.findOne(query, { projection:{ _id: 1, '@context': 1, '@type': 1 } })
}


// function parseId( identifier ) {

//   try {
//     if(!isMongoIdHexString(identifier))
//       return new RegExp(`^${identifier}$`, 'i')

//     return new ObjectID(identifier)
//   } catch (e) {
//     consola.error(e)
//   }
// }

// async function getDoc(identifier){

//   const collection = await getCollection('')

//   identifier = parseId(identifier)

//   consola.info('identifier', identifier)
//   const doc = await collection.findOne({ 'identifier.value': identifier })

//   if(isMongoIdHexString(doc._id)) doc._id = new ObjectID(doc._id)

//   return doc
// }


// async function getDocs(req, res, type='Place'){
//   const { params } = req
//   const { identifier, placeIdentifier, organizationIdentifier } = params
//   const isPlace =  type === 'Place'
//   const isOrg   =  type === 'Organization'

//   if(!identifier) return notFound(req, res, ` => identifier: ${identifier}`)

//   const self         = await getDoc(identifier)

//   if(!self ) return notFound(req, res, ` => identifier: ${identifier}`)

//   const place        = isPlace ? await getDoc(placeIdentifier)       : undefined

//   if(!placeIdentifier) return notFound(req, res, ` => placeIdentifier: ${placeIdentifier}`)
  
//   const organization = isOrg   ? await getDoc(organizationIdentifier): undefined


//   if(isPlace && !place) return notFound(req, res, ` => placeIdentifier: ${placeIdentifier}`)
//   if(isOrg && !organization) return notFound(req, res, ` => placeIdentifier: ${organizationIdentifier}`)

//   if(!isClassOrChildOfClass(type, self['@type'], req.$context )) return notFound(req, res, ` => @type: ${self['@type']} expectedOrChildOf:${type}`)
//   if(isPlace && !isClassOrChildOfClass(type, place['@type'], req.$context )) return notFound(req, res, `  => @type: ${place['@type']} expectedOrChildOf:${type}`)
//   if(isOrg   && !isClassOrChildOfClass(type, organization['@type'], req.$context )) return notFound(req, res, `  => @type: ${organization['@type']} expectedOrChildOf:${type}`)


//   return { self, place, organization }
// }


// async function update({ $context }, self ){
//   const { _id:     identifier        } = self
//   const { token,   partnerIdentifier } = $context
//   const { selfUrl, basePath          } = getOptions()

//   return superagent.put(`${selfUrl}${basePath}/${identifier}`)
//     .set('Authorization',     `Token ${token}`)
//     .set('partner-identifier', partnerIdentifier)
//     .set('Accept',             'application/json')
//     .type('json')
//     .send(self)
//     .then(res => res.body)
// }

//  const metaUpdate = collection.updateOne(query, { $set: { 'meta.version': doc.meta.version, 'meta.hash': hash } })

// function jsonParse(el){ try{ return JSON.parse(el); }catch(e){ return el; } }

// function classInstanceToRef(classInstance){
//   return { _id: classInstance._id, '@context': classInstance['@context'], '@type': classInstance['@type'] }
// }


// function unique(array){
//   return Array.from(new Set(array.map((el)=>{ if(isPlainObject(el)) return JSON.stringify(el); else return el}))).map(jsonParse)
// }

// async function updateContainsPlace({ $context }, self, place){
//   const placeRef = classInstanceToRef(place)

//   if(!self.containsPlace) self.containsPlace = [placeRef]
//   else self.containsPlace.push(placeRef)

//   self.containsPlace = unique(self.containsPlace)

//   return update({ $context }, self)
// }

// async function updateContainedInPlace({ $context }, self, place){
//   const placeRef = classInstanceToRef(place)

//   if(!self.containedInPlace) self.containedInPlace = [placeRef]
//   else self.containedInPlace.push(placeRef)

//   self.containedInPlace = unique(self.containedInPlace)

//   return update({ $context }, self)
// }

// async function postAction({ $context }, action, self, place){
//   const permittedActions = [ 'containedInPlace', 'containsPlace' ]

//   if(!permittedActions.includes(action)) throw new Error(`Action '${action}' not permitted.  Must be one of ${JSON.stringify(permittedActions)}`)

//   const { _id:     identifier        } = self
//   const { _id:     placeIdentifier   } = place
//   const { token,   partnerIdentifier } = $context
//   const { selfUrl, basePath          } = getOptions()

//   return superagent.post(`${selfUrl}${basePath}/${identifier}/${action}/${placeIdentifier}`)
//     .set('Authorization',     `Token ${token}`)
//     .set('partner-identifier', partnerIdentifier)
//     .set('Accept',             'application/json')
//     .type('json')
//     .then(res => res.body)
// }

// function isRefInArray(ref, anArray){
//   if(!ref?._id) throw new Error(`controllers.post.postsRefInArray ref has no _id`)
//   if(!Array.isArray(anArray)) return false

//   for (const aRef of anArray)
//     if(`${ref._id}` === `${aRef._id}`)
//       return true
  
//   return false
// }

// async function member(req, res) {
//   try {
//     const { self, organization } = await getDocs(req, res, 'Organization')

//     if(!self || !organization) return 

//     if(isRefInArray(organization, self.member)) return res.status(200).send({ exists: 1 })

//     await updateMember(req, self, organization)

//     await updateMemberOf(req, organization, self)

//     if(Array.isArray(self.memberOf))
//       for (const aRef of self.memberOf)
//         await postAction(req, 'member', aRef, organization)



//     if(Array.isArray(organization.member))
//     for (const aRef of organization.member)
//       await postAction(req, 'memberOf', aRef, self)

//     return res.status(200).send({ exists: 0 })
//   }
//   catch(e){

//     if(e.response?.body && Object.keys(e.response?.body).length){
//       consola.error('=========', e.response.body)
//       consola.error('=========', e.response.request.url)
//       return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors )
//     }

//     consola.error('failed to post/insert document', e)
//     return internalServerError(req, res)
//   }
// }

// async function memberOf(req, res, next) {
//   try {
//     const { self, organization } = await getDocs(req, res, 'Organization')

//     if(!self || !organization) return 

//     if(isRefInArray(organization, self.member)) return res.status(200).send({ exists: 1 })

//     await updateMemberOf(req, self, organization )

//     await updateMember(req, organization, self )



//     if(Array.isArray(self.member))
//       for (const aRef of self.member)
//         await postAction(req, 'memberOf', aRef, organization)


//     if(Array.isArray(place.containedInPlace))
//     for (const aRef of place.containedInPlace)
//       await postAction(req, 'containsPlace', aRef, self)

//     return res.status(200).send({  })
//   }
//   catch(e){
//     if(e.response?.body && Object.keys(e.response?.body).length){
//       consola.error('=========', e.response.body)
//       consola.error('=========', e.response.request.url)
//       return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.errors )
//     }

//     consola.error('failed to post/insert document',e)
//     return internalServerError(req, res)
//   }
// }

// async function containedInPlace(req, res, next) {
//   try {
//     const { self, place } = await getDocs(req, res, 'Place')

//     if(!self || !place) return 

//     if(isRefInArray(place, self.containsPlace)) return res.status(200).send({ exists: 1 })
    
//     await updateContainedInPlace(req, self, place)

//     await updateContainsPlace(req, place, self)

//     if(Array.isArray(self.containsPlace))
//       for (const aRef of self.containsPlace)
//         await postAction(req, 'containedInPlace', aRef, place)


//     if(Array.isArray(place.containedInPlace))
//     for (const aRef of place.containedInPlace)
//       await postAction(req, 'containsPlace', aRef, self)

//     return res.status(200).send({  })
//   }
//   catch(e){
//     if(e.response?.body && Object.keys(e.response?.body).length){
//       consola.error('=========', e.response.body)
//       consola.error('=========', e.response.request.url)
//       return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.errors )
//     }

//     consola.error('failed to post/insert document',e)
//     return internalServerError(req, res)
//   }
// }

// async function containsPlace(req, res) {
//   try {
//     const { self, place } = await getDocs(req, res, 'Place')

//     consola.warn(`${self?._id}/containsPlace/${place?._id}`)

//     if(!self || !place) return 

//     if(isRefInArray(place, self.containsPlace)) return res.status(200).send({ exists: 1 })

//     consola.warn(`${self?._id} before updates`)
//     await updateContainsPlace(req, self, place)
//     consola.warn(`${self?._id} after updateContainsPlace`)
//     await updateContainedInPlace(req, place, self)
//     consola.warn(`${self?._id} after updateContainedInPlace`)
//     consola.warn(`${self?._id} after updates`)

//     if(Array.isArray(self.containedInPlace))
//       for (const aRef of self.containedInPlace)
//         await postAction(req, 'containsPlace', aRef, place)

//     consola.warn(`${self?._id} after self.containedInPlace updates`)

//     if(Array.isArray(place.containsPlace))
//       for (const aRef of place.containsPlace)
//         await postAction(req, 'containsInPlace', aRef, self)

//     consola.warn(`${self?._id} after place.containsPlace updates`)
//     return res.status(200).send({ exists: 0 })
//   }
//   catch(e){

//     if(e.response?.body && Object.keys(e.response?.body).length){
//       consola.error('=========', e.response.body)
//       consola.error('=========', e.response.request.url)
//       return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors )
//     }

//     consola.error('failed to post/insert document', e)
//     return internalServerError(req, res)
//   }
// }