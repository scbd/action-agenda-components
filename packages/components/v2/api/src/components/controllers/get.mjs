//TODO - all identifiers to lower case = add regex around param.identifier if not mongoId
import Express from 'express'

import { getCollection             } from '../mongo/index.mjs'
import { getClassFilterRegexString } from '../partner-config.mjs'

import { cursorToDocument , internalServerError            } from '../http-responses.mjs'
import { consola          , time                , timeEnd  } from '../logger.mjs'

import { useCommonToAllMiddleware, parseIdentifier, parseQuery, parseRouteContext } from '../middleware/index.mjs'

export const loadGetRoutes = async (router = Express.Router()) => {
  const allClasses = await getClassFilterRegexString() 

  router.get ('/:identifier',                           ...useCommonToAllMiddleware(), parseQuery, parseIdentifier, parseRouteContext, get, cursorToDocument) // root only maybe
  router.get (`/:className(${allClasses})/:identifier`, ...useCommonToAllMiddleware(), parseQuery, parseIdentifier, parseRouteContext, get, cursorToDocument)

  return router
}

async function get({ $context }, res, next){
  try{
    consola.controller('get')
    time('GET request took:')

    const   collection  = await getCollection()

    $context.cursor = await collection.aggregate($context.pipeline) 

    timeEnd('GET request took:')

    return next()
  }
  catch(e){
    consola.error('failed to get document', e)
    return internalServerError(res)
  }
}
