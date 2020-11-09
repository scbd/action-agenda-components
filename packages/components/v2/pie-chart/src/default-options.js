import { setDefaultOptions, getDefaultOptionsFunction } from '@houlagins/default-options'
import { getUnLocale                                  } from '@houlagins/locale'
import  i18n from './locales/index.mjs'
import { name                                         } from '../package.json'

export  default getDefaultOptionsFunction(name)


const series = [ {
  type      : 'PieSeries',
  dataFields: {
    value   : 'value',
    category: 'name'
  },
  slices: {
    stroke       : '#ffffff',
    strokeWidth  : 1,
    strokeOpacity: .7,
    tooltipText  : '{category}: {value.value}',
    filters      : [ {
      type   : 'DropShadowFilter',
      opacity: .02
    } ]
  },
  ticks: {
    disabled: true
  },
  labels: {
    disabled: true
  },
  states: {
    hover: {
      properties: {
        scale: 1
      },
      filters: [ {
        type   : 'DropShadowFilter',
        opacity: 0.7,
        blur   : 5
      } ]

    },

    active: {
      properties: {
        shiftRadius: 1
      }
    }

  }
  // Series settings
} ]

const config ={
  responsive: {
    enabled: true
  },
  innerRadius: '40%',
  series,
  legend     : {
    type      : 'Legend',
    maxHeight : 80,
    scrollable: true
  }
}

const source   = 'regions'
const height   = '450px'
const basePath = '/'
const locale   = getUnLocale()

const dev           = { hostname: 'cbddev.xyz', api: 'https://api.cbddev.xyz/api', basePath, locale, config, height, source, i18n }
const stg           = { hostname: 'staging.cbd.int', ...dev }
const prod          = { hostname: 'cbd.int', ...stg, api: 'https://www.cbd.int/api' }

const environments  = { prod, stg, dev }

// #region options
const validationMap =
{ forceEnv: String,  /* default: production */
  basePath: String,  /* default: '/' */
  locale  : String,  /* default: derives from the client automatically otherwise 'en' */
  api     : String,  /* default: api/cbd.int/api/actions */
  hostname: String,  /* default: cbd.int - this is also used to derive the env if set. */
  config  : Object,  /* amchart config object */
  height  : String,  /* chart height */
  source  : String, /* the data source or dimension*/
  i18n    : Object }
// #endregion options

setDefaultOptions({ environments, validationMap, name }, name)

