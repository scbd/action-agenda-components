/* eslint-disable */
/*!
* @action-agenda/pie-chart 0.0.3  published: Fri Oct 09 2020 13:10:14 GMT-0400 (Eastern Daylight Time)
* 
* Pie chart widget
*
* @link https://scbd.github.io/action-agenda-components/components/pie-chart
* @source git+https://github.com/scbd/action-agenda-components.git
* @copyright (c) 2020 Secretariat of the Convention on Biological Diversity
* @license MIT
* 
*/

import { buildWidget, dependencyRef } from 'http://localhost:8089/dist/widget/dist/browser/index.min.js';
import { getDefaultOptionsFunction, setDefaultOptions } from 'https://cdn.cbd.int/@houlagins/default-options@~1.0.0/dist/browser/index.js';
import { getUnLocale } from 'https://cdn.cbd.int/@houlagins/locale@~1.0.0/dist/browser/index.js';

var name = "@action-agenda/pie-chart";
var version = "0.0.3";

var i18n = {
  messages: {
    en: {
      aichis          : 'Aichi Biodiversity Targets',
      sdgs            : 'Sustainable Development Goals',
      documentStates  : 'Document States',
      actionCategories: 'Action Categories',
      orgTypes        : 'Organization Types',
      govTypes        : 'Governments Types',
      jurisdictions   : 'Jurisdictions',
      subjects        : 'Subjects',
      countries       : 'Countries',
      regions         : 'Regions'
    }
  }
};

var getOptions = getDefaultOptionsFunction(name);


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
} ];

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
};

const source   = 'regions';
const height   = '450px';
const basePath = '/';
const locale   = getUnLocale();

const dev           = { hostname: 'cbddev.xyz', api: 'https://api.cbddev.xyz/api', basePath, locale, config, height, source, i18n };
const stg           = { hostname: 'staging.cbd.int', ...dev };
const prod          = { hostname: 'cbd.int', ...stg, api: 'https://www.cbd.int/api' };

const environments  = { prod, stg, dev };

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
  i18n    : Object };
// #endregion options

setDefaultOptions({ environments, validationMap, name }, name);

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig');
const [ libName ]   = name.match(regX);
const options       = getOptions();
const propsData     = { options };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N } = dependencyRef;

const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd@1.0.4/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' };

const dependencies      = { all       : [ VUE, VUE_I18N, SCBD_SSO_AUTH ],
                            vuePlugins: [ VUE_I18N, SCBD_SSO_AUTH ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] };

const config$1            = { version, name: libName, propsData, dependencies, selfUrl };

buildWidget(config$1);
//# sourceMappingURL=index.js.map
