import Express       from 'express'

import { consola             } from '../../logger.mjs'
import { getDoc              } from './util.mjs'
import { internalServerError } from '../../http-responses.mjs'

import { notFound     , forbidden } from '../../http-responses.mjs'
import { getCollection, isMongoId } from '../../mongo/index.mjs'

import { useCommonToAllMiddleware, versioning } from '../../middleware/index.mjs'

const admins   = ['ActionAdmin']
const statuses = ['draft','delete','unpublish','publish','reject']

export const loadStatusActionRoutes = async (router = Express.Router()) => {

  router.post (`/:identifier/status/:status`, ...useCommonToAllMiddleware(), changeStatus, versioning )

  return router
}

async function changeStatus(req, res, next){
    try{
        const { $context, params     } = req
        const { status  , identifier } = params

        if(!isAdmin($context.user)) return forbidden(req, res, `No permission to perform => action: ${status}, identifier: ${identifier}`)
        if(!validStatus(params)) return notFound(req, res, ` => action: ${status}, oneOf: ${JSON.stringify(statuses)}`)
        
        const document = await getDoc(identifier)

        if(!document) return notFound(req, res, ` => action: ${status}, identifier: ${identifier}`)

        const meta     = document.meta

        $context.operationClone = document
    
        meta.status = statusMap(status)

        const   collection   = await getCollection()
        const   updateDoc    = { ...document, meta }
        const   query        = isMongoId(identifier)? { _id:identifier } : { 'identifier.value':  identifier }
    
        const { result } = await collection.updateOne(query, { $set: updateDoc }, {})

        if(!result.ok) return notFound(req, res, `not found: ${identifier}`);

        res.status(200).send(res, 200, { updated: 1 })

        return next()
    }catch(e){
        consola.error(e)
        internalServerError()
    }
}

function validStatus({ status }){
  if(statuses.includes(status))
      return true
  return false
}

function isAdmin({roles}){

  for (let i = 0; i < admins.length; i++) 
      if(roles.includes(admins[i]))
          return  true

  return false
}

function statusMap(actionStatus) {
  const map = {
      delete   :'deleted'  ,
      publish  :'published',
      draft    :'draft'    ,
      reject   :'rejected' ,
      unpublish:'draft'
  }
  return map[actionStatus]
}