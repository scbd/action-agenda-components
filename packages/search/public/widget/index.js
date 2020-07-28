/* eslint-disable */
/*!
* @action-agenda/search 0.0.4
*
* @link www.cbd.int
* @source https://github.com/scbd/@action-agenda/search
* @copyright (c) 2019-2020 Secretariat of the Convention on Biological Diversity <it@cbd.int>
* @license MIT
* https://github.com/scbd/@action-agenda/search/blob/master/LICENCE
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@scbd/self-embedding-component/dist/browser/index.js';

var name = "https://cdn.cbd.int/@action-agenda/search/dist/browser/index.min.js";
var version = "0.0.4";

const libName   = name.replace('https://cdn.cbd.int/', '').replace('/dist/browser/index.min.js','');//hack for browser build
const options   = {};
const propsData = { options, forceEnv:'dev' };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N, SCBD_SSO_AUTH } = dependencyRef;

// const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' }

const dependencies      = { all: [VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[VUE_I18N, SCBD_SSO_AUTH], 
                            css: ['https://cdn.cbd.int/@scbd/www-css']
                          };

const config            = { version, name:libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
