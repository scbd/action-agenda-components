import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'

const name     = '@action-agenda/form'
const basePath = '/'
const locale   = getUnLocale()


const dev           = { api: 'https://api.cbddev.xyz/api', basePath, locale }
const stg           = { ...dev }
const prod          = { ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }
const validationMap = { forceEnv: String, basePath: String, locale: String, api: String }


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)