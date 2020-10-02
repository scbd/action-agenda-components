import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import { getUnLocale                                  } from '@houlagins/locale'

const name     = '@scbd/search'
const basePath = '/'
const locale   = getUnLocale()
const smTop      = '0'
const mdTop      = '0'
const lgTop      = '0'

const dev           = { hostname: 'cbddev.xyz', api: 'https://api.cbddev.xyz/api', basePath, locale, smTop, mdTop, lgTop }
const stg           = { hostname: 'staging.cbd.int', ...dev }
const prod          = { hostname: 'cbd.int', ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }
const validationMap = { forceEnv: String, basePath: String, locale: String, api: String, listenExternally: Boolean, preLoadFilter: String, smTop: String, mdTop: String, lgTop: String, hostname: String }


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)