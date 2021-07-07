import MapBuilderBase, { MapBaseEU, MapBaseCountries, MapBasePoliticalMappings } from '@scbd/amc4-base-map/dist/es/index.mjs'
import { reactive } from 'vue'
const { initEu                   , mapHomePositionToEu } = MapBaseEU
const { mapHomePositionToCountry                       } = MapBaseCountries
const { hasPoliticalMappings                           } = MapBasePoliticalMappings

export class MapBuilder extends MapBuilderBase{
  constructor(element, options){
    options.countryHitFunction = callBack

    super(element, options)

    this.events.on('ready', ready(this))
  }
}

export const ready = (mapBuilder) => () =>  {

  initCountryHomeSetting(mapBuilder)
  initEu(mapBuilder, { callBack, countryToolTipAction: countryToolTipAction(mapBuilder), euActionToolTipAction: euActionToolTipAction(mapBuilder) }, true)
}

export const clickUrl = ({ options }, id) => {
  const { basePath, countryParamName } = options
  
  const hasParent = hasPoliticalMappings(id)
  const code      = hasParent? hasParent : id

  return `${basePath}?${countryParamName}=${code}`
}

const selectedCountry = reactive({})
export const callBack =  (mapBuilder) => (ev) => {

  const { euIdentifier } = mapBuilder.options
  const  code            = ev.target.dataItem.dataContext? ev.target.dataItem.dataContext.id : euIdentifier
  const  name            = ev.target.dataItem.dataContext? ev.target.dataItem.dataContext.name : 'European Union'

  if(!mapBuilder.selectedCountry) mapBuilder.selectedCountry=selectedCountry

  mapBuilder.selectedCountry.code = code
  mapBuilder.selectedCountry.name = name

  const isServer = typeof window === 'undefined'

  if(isServer) return

  const event = new CustomEvent('countrySelected', { detail: code? mapBuilder.selectedCountry : undefined })

  window.document.dispatchEvent(event)
}

// export const clickUrl = ({ options }, id) => {
//   const { basePath, countryParamName } = options
  
//   const hasParent = hasPoliticalMappings(id)
//   const code      = hasParent? hasParent : id

//   return `${basePath}?${countryParamName}=${code}`
// }

// export const callBack =  (mapBuilder) => (ev) => {

//   const { euIdentifier } = mapBuilder.options
//   const   code           = ev.target.dataItem.dataContext? ev.target.dataItem.dataContext.id : euIdentifier

//   if(mapBuilder.options.callBack)  return mapBuilder.options.callBack(code)
  
//   window.location.href = clickUrl(mapBuilder, code)
// }

export const getCountryCode = (mapBuilder) => getCountryFromQuery(mapBuilder) || getCountryCodeFromParams(mapBuilder)

export const getCountryFromQuery = (mapBuilder) => {
  const { countryParamName }  = mapBuilder.options
  const   urlParams           = new URLSearchParams(location.search)
  const   searchValue         = urlParams.get(countryParamName)

  return searchValue? searchValue.toUpperCase() : undefined
}

export const getCountryCodeFromParams = (mapBuilder) => {
  const { params, countryParamName }  = mapBuilder.options

  if(!params || !countryParamName) return
  
  const countryString                 = params[countryParamName]
  const { code }                      = getCountry(countryString) || {}

  return code
}

export const initCountryHomeSetting = (mapBuilder) => {
  const code = getCountryCode(mapBuilder)

  if(!code) return
    
  if([ 'EU', 'EUR' ].includes(code)) return setTimeout(() => mapHomePositionToEu(mapBuilder), 1000)

  setTimeout(() => mapHomePositionToCountry(code, mapBuilder), 1000)
}

export const countryToolTipAction  = (mapBuilder) => (code) => mapBuilder.options.countryToolTipAction? mapBuilder.options.countryToolTipAction(code) : `href="${clickUrl(mapBuilder, code)}"`
export const euActionToolTipAction = (mapBuilder) => (code) => mapBuilder.options.euActionToolTipAction? mapBuilder.options.euActionToolTipAction(code) : `href="${clickUrl(mapBuilder, code)}"`