import { get$http          } from '@scbd/load-http'
import { getCountsQuery    } from './query'
import   filterPropertyMap   from './filter-to-schema-property-map'

const globalProps = { cache: new Map(), lastQuery: undefined, total: 0 }

export const counts =  async () => {
  try{
    const { cache } = globalProps
    const $http     = await get$http()

    const [ api, headers, searchParams ] = await getCountsQuery()

    const { filterCounts, total } = cache.has(searchParams.toString())? cache.get(searchParams.toString()) : await $http.get(api, { headers, searchParams }).then(async (res) => calculateCounts(await res.json()))

    updateCache(searchParams, { filterCounts, total })

    return  { filterCounts, total }
  }
  catch(e){
    const msg = e.response? e.response.status : ''

    console.error(msg, e)
  }
}

export const resetCountsCache = reset

function reset(){
  globalProps.lastQuery = undefined
  globalProps.cache.clear()
}

function updateCache(searchParams, counts){
  const { cache } = globalProps

  globalProps.lastQuery = searchParams

  if(cache.has(searchParams.toString())) return

  cache.set(searchParams.toString(), counts)
}

//export const getAllFiltersUsed = async () => new Set(Object.keys(await getCounts()))

function calculateCounts(data=[]){
  const total        = data.length
  const allKeysUsed  = extractKeys(data)
  const filterCounts = {}


  for (const key of allKeysUsed)
    if(filterCounts[key]) filterCounts[key]++
    else filterCounts[key]=1

  return { filterCounts, total }
}

function extractKeys (data, allKeys =[]){ // eslint-disable-line
  const allKeysUsed = allKeys

  if (!data) return undefined;

  for (const key in data){
    if(key === '_id') continue

    const value         = data[key]
    const hasIdentifier = value? !!value.identifier : false
    const isString      = typeof value === 'string'


    if(isString && isFilterProp(key)){
      allKeysUsed.push(value)
      continue
    }

    if(!hasIdentifier)
      if (Array.isArray(value) && isFilterProp(key))
        for (const element of value)
          if(element.identifier) allKeysUsed.push(element.identifier)
          else extractKeys(element, allKeysUsed)
      else if (value instanceof Object)
        extractKeys(value, allKeysUsed)
    
    if(hasIdentifier && isFilterProp(key)) allKeysUsed.push(value.identifier)
  }

  return allKeysUsed
}

function isFilterProp(prop){
  if(!prop || prop.length < 4) return false
  
  let filterProps = []

  for (const type in filterPropertyMap)
    filterProps =[ ...filterProps, ...filterPropertyMap[type] ]

  for (const filterProp of filterProps)
    if(filterProp.includes(prop)) return true
  
  return false
}