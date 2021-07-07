import { getDefaultOptions } from '@scbd/amc4-base-map/dist/es/index.mjs'
import { getCounts } from './api.js'


export default async () => {
  const options          = await getDefaultOptions()
  const counts           = await getCounts()
  const initEu           = false
  const countryParamName = 'country'
  const initAnimation    = false

  options.controls.projection = false
  options.config.projection    = 'NaturalEarth1'
  
  return { ...options, initEu, countryParamName, counts, initAnimation }
}