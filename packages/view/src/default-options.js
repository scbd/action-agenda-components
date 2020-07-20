import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'

const name     = '@scbd/view'
const basePath = '/'
const locale   = getUnLocale()
const slsToken = 'svOIo5CkADUxtddDIQsmSufMxrntG6WtIGDAQEuGMV1HGKM1RS1F5BmPspcL0YSK'

const dev           = { api: 'https://api.cbddev.xyz/api', basePath, locale, slsToken }
const stg           = { ...dev }
const prod          = { ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }
const validationMap = { forceEnv: String, basePath: String, locale: String, api: String, listenExternally: Boolean, preLoadFilter: String, slsToken: String }

setDefaultOptions({ environments, validationMap, name })

export  default getDefaultOptionsFunction(name)