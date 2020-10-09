import   localForage   from 'localforage'
import   isNil         from 'lodash.isnil'
import   omitBy        from 'lodash.omitby'
import { getUnLocale } from '@houlagins/locale'
import { get$http    } from '@houlagins/load-http'

import   getDefaultOptions                                                              from './default-options.mjs'
import { sourceMap, sdgsShort, orgTypeOther, actionCategories, isSameAsActionCat, documentStates } from './data/index.mjs'

const cache = new Map(Object.entries(sourceMap))

let options = {}

export const initializeApiStore   = (opts = {}) => {
  options = getDefaultOptions(opts)

  const { name, version } = options

  return localForage.config({ name: `${name}-${version}`, version, size: 4980736,  storeName: `${name}KeyValuePairs`  })
}

export const dataSources = options.dataSources

export const getData  = async (dataSource, noCache=false) => {
  const localData   = noCache? noCache : await getFromLocal(validateDataSource(dataSource))
  const aichiOrSdgs = dataSource==='aichis' || dataSource==='sdgs'

  if(localData) return localData

  if(dataSource === 'geoLocations')     return generateGeoLocations()
  if(dataSource === 'actionCategories') return getSanitizedActionCategories()
  if(dataSource === 'documentStates')   return documentStates.map(sanitize)
  if(dataSource === 'all')              return generateAll()

  return getFromApi(dataSource,  aichiOrSdgs? 'identifier' : undefined).then((res) => {
    if(dataSource === 'orgTypes') res.push(sanitizeOrgType(orgTypeOther))
    return res
  })
}

export const lookUp = async(type, keys, single=false) => {
  const data     = (type === 'all')? await joinAllData() : await getData(type)
  const flatKeys = flattenKeys(keys) || []

  const returnData = data.filter(({ identifier }) => Array.isArray(identifier)? (flatKeys.filter(value => identifier.includes(value))).length : flatKeys.includes(identifier))

  if(returnData && returnData.length ===1 && single) return returnData[0]
  if(returnData && returnData.length) return returnData

  return undefined
}

export const getType = async (key) => { // eslint-disable-line
  
  if(await lookUp('documentStates', key))   return 'documentStates'
  if(await lookUp('actionCategories', key)) return 'actionCategories'
  if(await lookUp('aichis', key))           return 'aichis'
  if(await lookUp('sdgs', key))             return 'sdgs'
  if(await lookUp('orgTypes', key))         return 'orgTypes'
  if(await lookUp('govTypes', key))         return 'govTypes'
  if(await lookUp('jurisdictions', key))    return 'jurisdictions'
  if(await lookUp('subjects', key))         return 'subjects'
  if(await lookUp('countries', key))        return 'countries'
  if(await lookUp('regions', key))          return 'regions'

  return undefined
}

export const isSameAs = (id) => isSameAsActionCat(id)

export const getAll              = () => getData('all')
export const getJurisdictions    = () => getData('jurisdictions')
export const getAichis           = () => getData('aichis')
export const getSubjects         = () => getData('subjects')
export const getCountries        = () => getData('countries')
export const getOrgTypes         = () => getData('orgTypes')
export const getGovTypes         = () => getData('govTypes')
export const getRegions          = () => getData('regions')
export const getGeoLocations     = () => getData('geoLocations')
export const getSdgs             = () => getData('sdgs')
export const getActionCategories = () => getData('actionCategories')
export const getDocumentStates   = () => getData('documentStates')

export const getAllByKey              = (keys, single=false) => lookUp('all', keys, single)
export const getJurisdictionsByKey    = (keys, single=false) => lookUp('jurisdictions', keys, single)
export const getAichisByKey           = (keys, single=false) => lookUp('aichis', keys, single)
export const getSubjectsByKey         = (keys, single=false) => lookUp('subjects', keys, single)
export const getCountriesByKey        = (keys, single=false) => lookUp('countries', keys, single)
export const getOrgTypesByKey         = (keys, single=false) => lookUp('orgTypes', keys, single)
export const getGovTypesByKey         = (keys, single=false) => lookUp('govTypes', keys, single)
export const getRegionsByKey          = (keys, single=false) => lookUp('regions', keys, single)
export const getGeoLocationsByKey     = (keys, single=false) => lookUp('geoLocations', keys, single)
export const getSdgsByKey             = (keys, single=false) => lookUp('sdgs', keys, single)
export const getActionCategoriesByKey = (keys, single=false) => lookUp('actionCategories', keys, single)
export const getDocumentStatesByKey   = (keys, single=false) => lookUp('documentStates', keys, single)


export const generateAll = async () => { // eslint-disable-line
  const locale  = getUnLocale()
  const allData = await Promise.all([
    getData('documentStates'),
    getData('actionCategories'),
    getData('orgTypes'),
    getData('govTypes'),
    getData('aichis'),
    getData('sdgs'),
    getData('jurisdictions'),
    getData('subjects'),
    getData('countries'),
    getData('regions')
  ])

  const all = [
    { filter: 'Document States',    data: allData[0] || [] },
    { filter: 'Action Categories',  data: allData[1] || [] },
    { filter: 'Organization Types', data: allData[2] || [] },
    { filter: 'Governments Types',  data: allData[3] || [] },
    { filter: 'Aichi Targets',      data: allData[4] || [] },
    { filter: 'SDGs',               data: allData[5] || [] },
    { filter: 'Jurisdictions',      data: allData[6] || [] },
    { filter: 'Subjects',           data: allData[7] || [] },
    { filter: 'Countries',          data: allData[8] || [] },
    { filter: 'Regions',            data: allData[9] || [] }
  ]

  const saveCache = !(allData.map(data => data.length)).includes(0)

  if(saveCache)
    localForage.setItem(`all-${locale}`, all)

  return all
}

export const  lookUpSource = async(key) => {
  const { dataSources } = options

  if(cache.has(key)) return cache.get(key)
  
  for (const source of dataSources){
    if(source === 'all') continue

    if(await lookUp(source, key, true)){
      cache.set(key, source)
      return source
    }
  }
}

const sanitizers = {
  jurisdictions: sanitize,
  aichis       : sanitizeAichi,
  subjects     : sanitize,
  countries    : sanitizeCountry,
  orgTypes     : sanitizeOrgType,
  govTypes     : sanitizeGovType,
  regions      : sanitize,
  geoLocations : sanitize,
  sdgs         : sanitizeSdg
}

async function getFromApi(apiName, orderBy='name'){
  try {
    const   $http      = await get$http()
    const   locale     = getUnLocale()
    const { apisUrls } = options

    const retry   = { limit: 5, methods: [ 'get' ] }
    const timeout = 20000

    const   data = (await (await $http.get(apisUrls[apiName], { timeout, retry })).json())
      .map(sanitizers[apiName])
      .filter(truthy => truthy)
      .sort((a, b) => a[orderBy].localeCompare(b[orderBy]))

    localForage.setItem(`${apiName}-${locale}`, data)
    return data
  }
  catch (error){
    console.error(error);
  }
}

async function getFromLocal(apiName){
  const locale = getUnLocale()
  const name   = `${apiName}-${locale}`

  if(!(await isExpired(name)))
    return localForage.getItem(name)
  return false
}

async function isExpired(apiName){
  const today  = new Date()
  const expiry = await localForage.getItem(`${apiName}-expiry`)

  if(!expiry){
    today.setDate(today.getDate() + options.expiry)
    localForage.setItem(`${apiName}-expiry`, today.toISOString())
    return false
  }

  if(new Date(expiry)<today){
    console.warn(`${options.name} is expired`)
    await localForage.clear()
    return true
  }
  
  return false
}

async function joinAllData(){
  const allData     = await getData('all')

  let joinedDatas = []

  allData.forEach(({ data }) => joinedDatas = [ ...joinedDatas, ...data ])

  return joinedDatas
}

function flattenKeys(keys){
  if(typeof keys === 'string') return [ keys ]

  if(Array.isArray(keys) && containsStrings(keys))
    return keys

  if(Array.isArray(keys) && containsObjects(keys))
    return keys.map((k) => k.identifier)

  if(Array.isArray(keys) && containsArrays(keys))
    return keys.map((k) => k[0])

  if(typeof keys === 'object')
    return [ keys.identifier ]
}

function containsStrings(keys){ return containsTypes(keys, 'string') }

function containsObjects(keys){ return containsTypes(keys, 'object') }

function containsArrays(keys){ return containsTypes(keys, 'array') }

function isType(key, type){
  if(Array.isArray(key) && type==='array') return true

  return (typeof key === type && !Array.isArray(key) && key !== null)
}

function containsTypes(keys, type){
  let is = false

  keys.forEach(key => { is = isType(key, type) })
  return is
}

function validateDataSource(source){
  const { dataSources } = options

  if(!dataSources) throw new Error('@action-agenda/cached-apis: failed to initialize module.  ensure to call initializeApiStore()')
  if(!dataSources.includes(source)) throw new Error(`Data source not valide: ${source} - must be one of`, JSON.stringify(dataSources))

  return source
}

async function generateGeoLocations(){
  try {
    const dataArray = await Promise.all([ getRegions(), getCountries() ])
    const data      = [ ...dataArray[0], ...dataArray[1] ]

    localForage.setItem('geoLocations', data)
    return data
  }
  catch (error){
    console.error(error);
  }
}

function getSanitizedActionCategories(){
  return Array.from(actionCategories).map(sanitize).sort((a, b) => a['name'].localeCompare(b['name']))
}

function sanitize(aDataItem){
  const { identifier, image, url }   = aDataItem
  const { name, alternateName } = getLocalizedNames(aDataItem)

  return omitBy({ identifier, name, alternateName, image, url }, isNil)
}

const excludedOrgTypes = [ '1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32', '8830904C-8AF4-4C2F-AADB-363D98D854DA', 'B3699A74-EF2E-467A-A82F-EF2149A2EFC5' ]

function sanitizeOrgType(aDataItem){
  const { identifier }   = aDataItem
  
  if(excludedOrgTypes.includes(identifier)) return undefined

  return sanitize(aDataItem)
}

function sanitizeGovType(aDataItem){
  const { identifier }   = aDataItem
  
  if(excludedOrgTypes.includes(identifier)) return sanitize(aDataItem)

  return undefined
}

function sanitizeSdg(aDataItem){
  const { code } = aDataItem

  const   paddedCode  = padCode(code)
  const   identifier  = `SDG-GOAL-${paddedCode}`
  const   image       = `https://attachments.cbd.int/sdg-${paddedCode}.svg`
  const   url         = `https://sustainabledevelopment.un.org/sdg${code}`

  return { identifier, image, url, ...getSdgName(aDataItem) }
}

function sanitizeAichi(aDataItem){
  const { identifier } = aDataItem
  const   code         = identifier.substring(13)
  const   image        = `https://attachments.cbd.int/${code}.svg`
  const   url          = `https://www.cbd.int/aichi-targets/target/${code}`

  return { ...sanitize(aDataItem), image, url }
}

function sanitizeCountry(aDataItem){
  const { identifier } = aDataItem
  const   image        = `https://www.cbd.int/images/flags/96/flag-${identifier}-96.png`
  const   url          = `https://www.cbd.int/countries/?country=${identifier}`

  return { ...sanitize(aDataItem), image, url }
}


function getLocalizedNames(aDataItem){
  const { name:nameObj, title, alternateName:alternateNameObj } = aDataItem
  

  const name          = getLocalizedProperty(nameObj) || getLocalizedProperty(title)
  const alternateName = getLocalizedProperty(alternateNameObj)

  return { name, alternateName }
}

function getLocalizedProperty(prop){
  if(!prop) return
  if(typeof prop === 'string') return prop

  if(!isLstring(prop)) throw new Error('property is not an lstring')

  const locale = getUnLocale()

  return prop[locale] || prop['en']
}

function isLstring (name){
  const nameDataType = typeof name

  return name && nameDataType === 'object' && name.en
}

function getSdgName({ code, title:alternateName }){
  const sdgIndex = Number(code)-1
  const locale   = getUnLocale()
  const name     = (sdgsShort[locale] || sdgsShort['en'])[sdgIndex]

  return { name, alternateName }
}

function padCode(code){
  const { length }   = code
  const   type       = typeof code
  const   validTypes = [ 'string', 'number' ]

  if(!validTypes.includes(type) || !length)
    throw new Error('@action-agenda/cached-apis.padCode: cade passed must be string or number')
  
  if(length===1) return `0${code}`

  return code
}

