import { buildWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name, version              } from '../../../package.json'

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName ]   = name.match(regX)
const options   = {}
const propsData = { options }

const selfUrl = 'http://localhost:8089/dist/browser/index.js'

const { VUE, VUE_I18N } = dependencyRef

const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd@1.0.4/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' }

const dependencies      = { all       : [ VUE, VUE_I18N, SCBD_SSO_AUTH ],
                            vuePlugins: [ VUE_I18N, SCBD_SSO_AUTH ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name: libName, propsData, dependencies, selfUrl }

buildWidget(config)
