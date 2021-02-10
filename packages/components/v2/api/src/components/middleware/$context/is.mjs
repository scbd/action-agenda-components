import { getJsonSchemaClass } from './schema.mjs'

export const setIsContext = async (req) => {
  const { $context } = req

  $context.isGet         = isGet    (req     )
  $context.isSchema      = isSchema (req     )
  $context.isList        = isList   (req     )
  $context.isPost        = isPost   (req     )
  $context.isPut         = isPut    (req     )
  $context.isCount       = isCount  ($context)
  $context.requestType   = isGet    (req)? 'GET' : isSchema(req)? 'SCHEMA' : isList(req)? 'LIST' : 'UKNOWN'
  $context.isSchemaRoute = await isSchemaRoute(req)
}

function isCount({ agDbQuery }){
  if(!agDbQuery) return false
  for (const agObj of agDbQuery)
    for (const prop in agObj) 
      if(prop === '$count')
        return true
    
  return false
}

function isPut({ method }){
  return method === 'PUT'
}

function isPost({ method }){
  return method === 'POST'
}

async function isSchemaRoute(req){
  const { $context } = req
  
  if(isSchema(req))
    $context.schema = await getJsonSchemaClass(req.$context)

  return isSchema(req)
}

function isSchema({ url='', method }){
  return url.includes('schema') && method === 'GET'
}

function isGet({ params={}, method }){
  const paramNames = Object.keys(params)

  return paramNames.includes('identifier') && method === 'GET'
}

function isList({ url='', method, params={} }){
  return !isGet({ params, method }) && !isSchema({ url, method }) && method === 'GET'
}