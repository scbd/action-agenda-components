import   isEmpty                    from 'lodash.isempty'

import { setIsContext             } from './is.mjs'
import { lStringProjection        } from './locale-resolver.mjs'
import { buildFieldResolingStages } from './mongo-queries.mjs'
import { setPartnerSchemaRoute    } from './schema.mjs'
import { consola                  } from '../../logger.mjs'

export const parseRouteContext = async (req, res, next) => {
  // consola.warn('Middleware: parseRouteContext')

  const { params, $context } = req

  setPartnerSchemaRoute(req)
  await setIsContext(req)

  const { isSchemaRoute, isPost, isPut, isGet, isCount, className, classChildren } = $context

  if(isSchemaRoute) return next()

  if(isPost || isPut ) return next()
  
  const resolveLocales = $context.locale? lStringProjection($context.locale.language) : []
  const fieldResolver  = buildFieldResolingStages(req)
  const identifier     = isGet? { 'identifier.value': params.identifier } : {}
  const $match         = buildMatch({ className, classChildren, identifier })

  $context.mapFn       = isCount? (v)=>v : cursorClean
  $context.pipeline    = [ { $match }, ...fieldResolver, ...getAgDbQuery($context), ...resolveLocales]

  if(isGet) return next()

  // $context.pipeline = [ { $match }, ...fieldResolver, ...getAgDbQuery($context), ...resolveLocales ]
  
  $context.pipeline = isCount? [{ $match }, ...getAgDbQuery($context) ] : $context.pipeline
  
  return next()
}

function buildMatch({ className, classChildren, identifier }){
  if(className && classChildren) return { ...{ '@type': {'$in': [ className, ...classChildren ]} }, ...identifier }

  return { ...identifier }
}

function cursorClean(object){
  for (const key in object) 
    if(isEmpty(object[key])) delete object[key]
  
  return object
}

function getAgDbQuery({ agDbQuery, className }){
  if(!className || !agDbQuery) return agDbQuery
  for (const agObj of agDbQuery)
    for (const prop in agObj) 
      if(prop === '$count')
        agObj[prop] = className
    
  return agDbQuery
}

