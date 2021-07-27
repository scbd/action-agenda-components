/* eslint-disable */
/*!
* @action-agenda/view 1.1.10  published: Sun Jun 27 2021 12:54:03 GMT-0400 (GMT-04:00)
* 
* https://github.com/scbd/action-agenda-components/tree/master/packages/view#readme
*
* @link https://github.com/scbd/action-agenda-components/tree/master/packages/view#readme
* @source git+https://github.com/scbd/action-agenda-components.git
* @copyright (c) 2021 Secretariat of the Convention on Biological Diversity
* @license MIT
* 
*/

import { buildWidget, dependencyRef } from 'https://cdn.cbd.int/@houlagins/self-embedding-component@1.0.13/dist/browser/index.js';

var name = "@action-agenda/view";
var version = "1.1.10";

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig');
const [ libName ]   = name.match(regX);
const options   = {};
const propsData = { options };

const selfUrl = 'http://localhost:8089/dist/browser/index.js';

const { VUE, VUE_I18N } = dependencyRef;

const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd@1.0.4/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' };

const dependencies      = { all       : [ VUE, VUE_I18N, SCBD_SSO_AUTH ],
                            vuePlugins: [ VUE_I18N, SCBD_SSO_AUTH ],
                            css       : [ 'http://localhost:8089/public/widget/index.css' ] };

const config            = { version, name: libName, propsData, dependencies, selfUrl };

buildWidget(config);
//# sourceMappingURL=index.js.map
