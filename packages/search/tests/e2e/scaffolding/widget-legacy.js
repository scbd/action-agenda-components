import   Component                          from '../../../src/index.js'
import   SSO                                from '@scbd/sso-vue-plugin-scbd'
import { buildLegacyWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name             , version }       from '../../../package.json'

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName ]   = name.match(regX)
const options   = {}
const propsData = { options, forceEnv:'production' }

const selfUrl = 'http://localhost:8089/dist/legacy/umd/index.umd.js'

const { VUE, VUE_I18N } = dependencyRef.legacy

const dependencies      = { all: [VUE, VUE_I18N], 
                            vuePlugins:[VUE_I18N], 
                            css       : [ 'https://cdn.cbd.int/@action-agenda/search/dist/widget/index.css', 'https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.mjs.css' ] 
                          }

const config            = { version, name:libName, propsData, dependencies, selfUrl}

buildLegacyWidget(Component, config,  [SSO] )
