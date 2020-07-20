import   Component                          from '../../../src/index.js'
import   SSO                                from '@scbd/sso-vue-plugin-scbd'
import { buildLegacyWidget, dependencyRef } from '@scbd/self-embedding-component'
import { name             , version }       from '../../../package.json'

const libName   = name.replace('https://cdn.cbd.int/', '')//hack for browser build
const options   = {}
const propsData = { options, forceEnv:'dev' }


const { VUE, VUE_I18N } = dependencyRef.legacy

const dependencies      = { all: [VUE, VUE_I18N], 
                            vuePlugins:[VUE_I18N], 
                            css: ['https://cdn.cbd.int/@scbd/www-css', 'http://localhost:8089/dist/legacy/umd/index.css']
                          }

const config            = { version, name:libName, propsData, dependencies }

buildLegacyWidget(Component, config,  [SSO] )
