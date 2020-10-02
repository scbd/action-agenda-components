import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import { getUnLocale                                  } from '@houlagins/locale'

const name     = '@action-agenda/view'
const basePath = '/'
const locale   = getUnLocale()

const dev           = { hostname: 'cbddev.xyz', api: 'https://api.cbddev.xyz/api', basePath, locale }
const stg           = { hostname: 'staging.cbd.int', ...dev }
const prod          = { hostname: 'cbd.int', ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }
const validationMap = { forceEnv: String, basePath: String, locale: String, api: String, hostname: String }

setDefaultOptions({ environments, validationMap, name })

export  default getDefaultOptionsFunction(name)