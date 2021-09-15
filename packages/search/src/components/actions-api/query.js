import { toURLSearchParams } from '@houlagins/load-http'
import { getType           } from '@action-agenda/cached-apis'
import { getOptions        } from './options'
import   filterPropertyMap   from './filter-to-schema-property-map'
import { values } from 'lodash'

//primary module api
export default (page={}) => Promise.all([ getApiUri(), getHeaders(), getApiQuery(page) ])

export const getCountsQuery = () => Promise.all([ getApiUri(), getHeaders(), getCountsApiQuery() ])


//secondary module api
export const getHeaders = async() => {
  const { getToken } = await getOptions()

  return (await getToken())? { Authorization: `Ticket ${await getToken()}` } : {}
}

export const getApiUri = async() => {
  const { api } = await getOptions()

  return `${api}/v2019/actions`
}

export const getApiQuery= async(page={}) => {
  const params = { q: await query(), ...page }
  
  return toURLSearchParams(Object.assign(defaultApiQuery(), params))
}

export const getCountsApiQuery = async() => {
  const params = { q: await getMongoQuery() }

  return toURLSearchParams(Object.assign(defaultCountsApiQuery(), params))
}

export const getSortParams = async(page={}) => {
  const params = {s: await sortQuery(), ...page }

  // return toURLSearchParams(Object.assign(defaultQuery(), params))
}

// private function

function sortQuery() {
  const sortType = readParamType('s')
  let s = {}

  const key = Object.keys(sortType)
  const type = 'meta'

  // Unsure of how to form s to send to api here?


  return s
}

async function getMongoQuery (){
  const filters = readSearchParamsByName('filter')
  let q = {}

  for (const key of filters){
    const type = await readSearchParamsByName(key)

    if(!type) continue

    if(type === '$text') q =  addTextQuery(key, q)
    else q = getMongoPropertyQuery(q, type, key)
  }
  return q
}

// function getFilterType(key){
//   if(key.includes('FREETEXT-')) return '$text'

//   return getType(key)
// }

function readSearchParamsByName (searchParamName){
  const params  = (new URL(document.location)).searchParams
  
  return params.getAll(searchParamName)
}

function defaultApiQuery (){
  const f  = { ... getMongoFilterFields(), meta: 1, 'action.name': 1, 'action.description': 1, 'action.image': 1 }

  delete(f['meta.status'])
  delete(f['actor.country.identifier'])
  delete(f['actor.types'])

  return { ...defaultCountsApiQuery(),  f }
}

function defaultCountsApiQuery (){
  const q  = {}
  const sk = 0
  const s  = { 'meta.modifiedOn': -1, 'meta.createdOn': -1 }  // -1?
  const f  =  getMongoFilterFields()

  return { q, sk, s, f }
}

function  getMongoFilterFields(){
  const f = {}

  for (const type in filterPropertyMap)
    for (const prop of filterPropertyMap[type])
      f[prop] = 1
  
  return f
}


function getMongoPropertyQuery(q, type, key){
  const propertyPaths = filterPropertyMap[type]

  propertyPaths.forEach((pPath) => {
    const noElemMatch = pPath.includes('status') || pPath.includes('identifier')

    if(noElemMatch) return q[pPath] = key

    if(!q[pPath]) return q[pPath] = { $all: [ { identifier: key } ] }

    if (q[pPath].$all) return q[pPath].$all.push({ identifier: key })
  })  

  return q
}

function addTextQuery(key, q){
  const text = key.replace('FREETEXT-', '')
  
  if(q && !q.$text) q.$text = { $search: `"${text}"` }

  else q.$text.$search+= ` "${text}"`

  return q
}