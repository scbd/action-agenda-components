import   Express   from 'express'
import { consola } from '../../logger.mjs'

import { invalidParameter        , internalServerError } from '../../http-responses.mjs'
import { useCommonToAllMiddleware } from '../../middleware/index.mjs'

import { isRefInArray, getDocs, unique, postAction, update, classInstanceToRef } from './util.mjs'

export const loadPlacesActionRoutes = async (router = Express.Router()) => {

  router.post (`/:identifier/containsPlace/:placeIdentifier`   , ...useCommonToAllMiddleware(), containsPlace )
  router.post (`/:identifier/containedInPlace/:placeIdentifier`, ...useCommonToAllMiddleware(), containedInPlace )

  return router
}

async function containedInPlace(req, res) {
  try {
    const { self, place } = await getDocs(req, res, 'Place')

    if(!self || !place) return 

    if(isRefInArray(place, self.containsPlace)) return res.status(200).send({ exists: 1, updated: 0 })
    if( self._id === place._id) return res.status(200).send({ exists: 0, updated: 0 })

    await updateContainedInPlace(req, self, place)

    await updateContainsPlace(req, place, self)

    if(Array.isArray(self.containsPlace))
      for (const aRef of self.containsPlace)
        await postAction(req, 'containedInPlace', aRef, place)


    if(Array.isArray(place.containedInPlace))
    for (const aRef of place.containedInPlace)
      await postAction(req, 'containsPlace', aRef, self)

    return res.status(200).send({ exists: 0, updated: 1 })
  }
  catch(e){
    if(e.response?.body && Object.keys(e.response?.body).length)
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.errors )

    consola.error('failed post containedInPlace on place',e)
    return internalServerError(req, res)
  }
}

async function containsPlace(req, res) {
  try {
    const { self, place } = await getDocs(req, res, 'Place')

    consola.warn(`${self?._id}/containsPlace/${place?._id}`)

    if(!self || !place) return 

    if(isRefInArray(place, self.containsPlace)) return res.status(200).send({ exists: 1, updated: 0 })
    if( self._id === place._id) return res.status(200).send({ exists: 0, updated: 0 })
    
 
    await updateContainsPlace(req, self, place)
 
    await updateContainedInPlace(req, place, self)


    if(Array.isArray(self.containedInPlace))
      for (const aRef of self.containedInPlace)
        await postAction(req, 'containsPlace', aRef, place)


    if(Array.isArray(place.containsPlace))
      for (const aRef of place.containsPlace)
        await postAction(req, 'containsInPlace', aRef, self)

    consola.warn(`${self?._id} after place.containsPlace updates`)
    return res.status(200).send({ exists: 0, updated: 1 })
  }
  catch(e){

    if(e.response?.body && Object.keys(e.response?.body).length)
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors )

    consola.error('failed post containsPlace on place', e)
    return internalServerError(req, res)
  }
}

async function updateContainsPlace({ $context }, self, place){
  const placeRef = classInstanceToRef(place)

  if(!self.containsPlace) self.containsPlace = [placeRef]
  else self.containsPlace.push(placeRef)

  self.containsPlace = unique(self.containsPlace)

  return update({ $context }, self)
}

async function updateContainedInPlace({ $context }, self, place){
  const placeRef = classInstanceToRef(place)

  if(!self.containedInPlace) self.containedInPlace = [placeRef]
  else self.containedInPlace.push(placeRef)

  self.containedInPlace = unique(self.containedInPlace)

  return update({ $context }, self)
}

