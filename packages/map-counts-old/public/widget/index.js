/* eslint-disable */
/*!
* @action-agenda/map-counts 2.0.0  published: Wed Jul 07 2021 10:52:20 GMT-0400 (GMT-04:00)
* 
* https://scbd.github.io/action-agenda-components/components/map
*
* @link https://scbd.github.io/action-agenda-components/components/map
* @source git+https://github.com/scbd/action-agenda-components.git
* @copyright (c) 2021 Secretariat of the Convention on Biological Diversity
* @license MIT
* 
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@houlagins/self-embedding-component@1.0.17/dist/browser/index.js';

var name = "@action-agenda/map-counts";
var version = "2.0.0";

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig');
const [ libName ]   = name.match(regX);
const options   = {};
const propsData = { options, forceEnv:'production' };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N } = dependencyRef;


const dependencies      = { all: [VUE, VUE_I18N], 
                            vuePlugins:[VUE_I18N ],
                            css       : [ 'http://localhost:8089/public/widget/index.css', 'https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.mjs.css' ]
                          };

const config            = { version, name:libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
