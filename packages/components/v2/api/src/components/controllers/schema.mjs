import Express from 'express'

import { consola } from '../logger.mjs'

import { useCommonToAllMiddleware, parseRouteContext          } from '../middleware/index.mjs'
import { getClassFilterRegexString, getPropsFilterRegexString } from '../partner-config.mjs'

export const loadSchemaRoutes = async (router = Express.Router()) => {
  const allClasses = await getClassFilterRegexString()  // regex possible classes
  const allProps   = await getPropsFilterRegexString()

  router.get    ('/schema',                                               ...useCommonToAllMiddleware(), parseRouteContext, schema)
  router.get    (`/:className(${allClasses})/schema`,                     ...useCommonToAllMiddleware(), parseRouteContext, schema)
  router.get    (`/:className(${allClasses})/schema/:prop(${allProps})`,  ...useCommonToAllMiddleware(), parseRouteContext, schema)

  return router
}

function schema({ $context }, res){
  consola.controller('schema')
  res.status(200).send($context.schema) 
}