import   Component                          from './index.js'
import   SSO                                from '@scbd/sso-vue-plugin-scbd'
import { buildLegacyWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name, version }       from '../package.json'
import   getOptions                   from './default-options'

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName ]   = name.match(regX)
const options   = getOptions()
const propsData = { options }

const { VUE, VUE_I18N } = dependencyRef.legacy


const dependencies      = { all       : [ VUE, VUE_I18N, SSO ],
                            vuePlugins: [ VUE_I18N, SSO ],
                            css       : [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name: libName, propsData, dependencies }

buildLegacyWidget(Component, config, [ SSO ])
