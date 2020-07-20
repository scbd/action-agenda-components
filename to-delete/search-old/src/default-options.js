import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'

const name     = '@scbd/search'
const basePath = '/'
const locale   = getUnLocale()
const smTop      = '0'
const mdTop      = '0'
const lgTop      = '0'

const dev           = { api: 'https://api.cbddev.xyz/api', basePath, locale, smTop, mdTop, lgTop}
const stg           = { ...dev }
const prod          = { ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }
const validationMap = { forceEnv: String, basePath: String, locale: String, api: String, listenExternally: Boolean, preLoadFilter: String, smTop: String, mdTop: String, lgTop: String }


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)