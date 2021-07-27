import { get$http           }         from '@houlagins/load-http'
import { initializeApiStore, lookUp } from '@action-agenda/cached-apis'
import   isNil                        from 'lodash.isnil'
import   omitBy                       from 'lodash.omitby'
import   isObject                     from 'lodash.isplainobject'
import   isEmpty                      from 'lodash.isempty'

export const getHeaders = async(options) => {
  const { getToken } = options

  return getToken && (await getToken())? { Authorization: `Ticket ${await getToken()}` } : {}
}

export const getApi = (id, options) => {
  const { api } = options

  return `${api}/v2019/actions/${encodeURIComponent(id)}`
}

export const getAction = async (options, id) => {
  try {
    await initializeApiStore()
    const identifier = id? id : getActionIdFromQuery()
    const opts       = options
    const $http      = await get$http()
    const headers    = await getHeaders(opts)
    const apiUrl     = getApi(identifier, opts)
    const data       = await  (await $http.get(apiUrl, { headers })).json()
    
    return normalizeData(data, opts)
  }
  catch (e){ console.error('', e) }
}

function getActionIdFromQuery(){
  if (typeof window === 'undefined') return false

  const urlParams = new URLSearchParams(location.search)

  return urlParams.get('action-id')
}

async function normalizeData(raw, options){ // eslint-disable-line
  const { aichiTargets, actionCategories, sdgs, thematicAreas, operationalAreas } = raw.actionDetails || {}
  const { country, types, url } = raw.actor || {}

  if(url)              raw.actor.url                      = await addProtocol(raw.actor.url)
  if(aichiTargets)     raw.actionDetails.aichiTargets     = await lookUp('aichis',           aichiTargets.map(mapByIdentifier))
  if(sdgs)             raw.actionDetails.sdgs             = await lookUp('sdgs',             sdgs.map(mapByIdentifier))
  if(actionCategories) raw.actionDetails.actionCategories = await lookUp('actionCategories', actionCategories.map(mapByIdentifier))
  if(thematicAreas)    raw.actionDetails.thematicAreas    = await lookUp('subjects',         thematicAreas.map(mapByIdentifier))
  if(operationalAreas) raw.actionDetails.operationalAreas = await lookUp('all',    operationalAreas.map(mapByIdentifier))
  if(country)          raw.actor.country                  = await lookUp('countries',        country.identifier, true)
  if(types)            raw.actor.types                    = await lookUp('all',              types.map(mapByIdentifier))

  if(raw.contacts && raw.contacts[0] && raw.contacts[0].country) raw.contacts[0].country = await lookUp('countries', raw.contacts[0].country.identifier, true)
  
  if(raw.partners && raw.partners.length)
    raw.partners = raw.partners.filter(({ name }) => typeof name.en === 'string')

  if(raw.partners && !raw.partners.length) delete(raw.partners)

  return normalizeLstring(raw, options)
}

function mapByIdentifier({ identifier }){ return identifier }

async function normalizeLstring(prop, options){ // eslint-disable-line
  if(!isObject(prop) && !Array.isArray(prop)) return prop

  if(isObject(prop)) prop = omitBy(prop, isNil)
  if(isObject(prop)) prop = omitBy(prop, isEmpty)
  if(Array.isArray(prop)) prop = prop.filter((item) => item && !isEmpty(item))

  
  for (const key in prop){
    if(!isObject(prop[key]) && !Array.isArray(prop[key])) continue
    if(Array.isArray(prop[key]) || !isLanguageMap(prop[key], options)) prop[key] = await normalizeLstring(prop[key], options)
    else prop[key] = mapLang(prop[key], options)
  }

  return prop
}

function isLanguageMap(testValue, { locale = 'en' }){
  if(isEmpty(testValue) || !isObject(testValue)) return false

  if(Object.keys(testValue).includes(locale) || Object.keys(testValue).includes('en')) return true

  return false
}

function mapLang(lString, { locale = 'en' }){
  return lString[locale] || lString['en']
}
const testUri = async(url) => {
  const headers = { Authorization: 'Bearer svOIo5CkADUxtddDIQsmSufMxrntG6WtIGDAQEuGMV1HGKM1RS1F5BmPspcL0YSK' }
  const $http   = await get$http()
  const res = await (await $http.post('https://injo3jyxlb.execute-api.us-east-1.amazonaws.com/stg/test', { headers, json: { url } })).json()

  return res
}

const trimHyperTextProtocol = (urlStr) => {
  try{
    const { host, pathname, search } = new URL(urlStr)
    const cleanPath                  = pathname.length===1? '' : pathname

    return `${host}${cleanPath}${search}`
  }
  catch (ex){ return urlStr }
}

async function addProtocol(urlStr){ // eslint-disable-line
  const url   = trimHyperTextProtocol(urlStr)
  const https = `https://${url}`
  const http  = `http://${url}`


  if(await testUri(https)) return https
  if(await testUri(http)) return http

  return url
}