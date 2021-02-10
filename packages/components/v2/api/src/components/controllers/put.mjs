import Express from 'express'

import { consola                   } from '../logger.mjs'
import { getClassFilterRegexString } from '../partner-config.mjs'

import { isMongoId                 , getCollection                    } from '../mongo/index.mjs'
import { processSubClasses         , parseIdentifier    , moveUploads } from './post-put-util.mjs'
import { invalidParameter          , internalServerError, notFound    } from '../http-responses.mjs'

import { useCommonToAllMiddleware, meta, validate, parseRouteContext, versioning } from '../middleware/index.mjs'

export const loadPutRoute = async (router = Express.Router()) => {

  const allClasses = await getClassFilterRegexString()

  //router.put (`/:className(${allClasses}/:identifier)`, logger, parseRouteContext, validate, parseIdentifier, meta, moveUploads, put)
  router.put ('/:identifier', ...useCommonToAllMiddleware(), parseRouteContext, validate,   parseIdentifier, meta, moveUploads, put, versioning)

  return router
}

async function put(req, res, next){
  const { body, params, $context } = req
  
  try {
    consola.controller('put')
    const { originalDoc } = $context
    const { identifier  } = params

    if(!identifier) return notFound(req, res, `not found - identifier ${identifier}`);

    const   collection   = await getCollection()
    const   updateDoc    = { ...originalDoc, ...body, ...(await processSubClasses(req, res))}
    const   query        = isMongoId(identifier)? { _id:identifier } : { 'identifier.value':  identifier }

    $context.operationClone = updateDoc

    const { result } = await collection.updateOne(query, { $set: updateDoc }, {})

    if(!result.ok) return notFound(req, res, `not found`);

    const { '@context': context, '@type': type } = body

    res.status(200).send({ '@context': context, '@type': type, _id: identifier })

    if(result.nModified) next()
  } catch(e){

    if(e.response?.body){
      consola.error('PUT ERROR:', e.response.body)
      
      return invalidParameter(e.response.body, res, e.response.body.field, e.response.body.message, e.response.body.errors  )
    }

    consola.error('failed to put document', e)
    return internalServerError(req, res)
  }
}
