/* eslint-disable */
/*!
* @action-agenda/search 1.0.0  published: Thu Oct 01 2020 17:36:53 GMT-0400 (Eastern Daylight Time)
* 
* https://github.com/scbd/action-agenda-components/tree/master/packages/serach#readme
*
* @link https://github.com/scbd/action-agenda-components/tree/master/packages/search#readme
* @source git+https://github.com/scbd/action-agenda-components.git
* @copyright (c) 2020 Secretariat of the Convention on Biological Diversity
* @license MIT
* 
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@houlagins/self-embedding-component@~1.0.3/dist/browser/index.js';

var name = "@action-agenda/search";
var version = "1.0.0";

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig');
const [ libName ]   = name.match(regX);
const options   = {};
const propsData = { options, forceEnv:'dev' };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N } = dependencyRef;

const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd@1.0.4/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' };

const dependencies      = { all: [VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[VUE_I18N, SCBD_SSO_AUTH], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          };

const config            = { version, name:libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
