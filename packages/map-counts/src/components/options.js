import { getDefaultOptions, MapBaseConfig } from '@scbd/amc4-base-map/dist/es/index.mjs'
import { getCounts } from './api.js'
import { getUnLocale                                  } from '@houlagins/locale'

const scbdCMSLocale = () => {
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}



export default async () => {
  const options          = await getDefaultOptions()
  const counts           = false//await getCounts()
  const initEu           = false
  const countryParamName = 'country'
  const initAnimation    = false

  options.basePath          = '/action-agenda/contributions'
  options.config            = await MapBaseConfig.default()
  options.config.projection = 'NaturalEarth1'

  options.controls.projection = false

  const locale = scbdCMSLocale() || getUnLocale()
  const modal  = true

  return { ...options, initEu, countryParamName, counts, initAnimation, locale, modal }
}