import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import { getUnLocale                                  } from '@houlagins/locale'

const scbdCMSLocale = () => {
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}
const name     = '@action-agenda/view'
const basePath = '/'
const locale   = scbdCMSLocale() || getUnLocale()

const dev           = { hostname: 'cbddev.xyz', api: 'https://api.cbddev.xyz/api', basePath, locale }
const stg           = { hostname: 'staging.cbd.int', ...dev }
const prod          = { hostname: 'cbd.int', ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }

// #region snippet
const validationMap =
{ forceEnv: String,  /* default: production */
  basePath: String,  /* default: '/' */
  locale  : String,  /* default: derives from the client automatically otherwise 'en' */
  api     : String,  /* default: api/cbd.int/api/actions */
  hostname: String   /* default: cbd.int - this is also used to derive the env if set. */
}
// #endregion snippet

setDefaultOptions({ environments, validationMap, name })

export  default getDefaultOptionsFunction(name)