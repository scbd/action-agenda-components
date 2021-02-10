import Express from 'express'

import { getCollection                 } from '../mongo/index.mjs'
import { getClassFilterRegexString,    } from '../partner-config.mjs'

import { useCommonToAllMiddleware , parseQuery , parseRouteContext } from '../middleware/index.mjs'
import { consola                  , time       , timeEnd           } from '../logger.mjs'
import { streamCursor , internalServerError          } from '../http-responses.mjs'

export const loadListRoutes = async (router = Express.Router()) => {
  const allClasses = await getClassFilterRegexString()  // regex possible classes

  // router.get ('/'                     , parseQuery, list)
  router.get (`/:className(${allClasses})`, ...useCommonToAllMiddleware(), parseQuery, parseRouteContext, list, streamCursor)
  
  return router
}


async function list({ $context }, res, next ){
  try{
    consola.controller('list')
    time('LIST request took:')

    const   collection = await getCollection()

    $context.cursor = await collection.aggregate($context.pipeline)

    timeEnd('LIST request took:')
    
    return next()
  }
  catch(e){
    consola.error('failed to list', e)
    return internalServerError(res)
  }
}
