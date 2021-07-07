import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name, version              } from '../package.json'

const   regX      = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName ] = name.match(regX)
const   options   = {}
const   propsData = { options }

const { VUE, VUE_I18N,  SCBD_SSO_AUTH } = dependencyRef
const selfUrl = 'http://localhost:8089/dist/browser/index.min.js'

const dependencies      = { all       : [ VUE, VUE_I18N, SCBD_SSO_AUTH ],
                            vuePlugins: [ VUE_I18N, SCBD_SSO_AUTH ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css'] }

const config            = { version, name: libName, propsData, dependencies, selfUrl }

buildWidget(config)
