import   Component                          from './index.js'
import { buildLegacyWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name , version                   } from '../package.json'

const libName   = name.replace('https://cdn.jsdelivr.net/npm/', '')//hack for browser build
const propsData = { options: {}}

const { VUE, VUE_I18N } = dependencyRef.legacy

const dependencies      = { all       : [ VUE, VUE_I18N ],
                            vuePlugins: [ VUE_I18N ],
                            css       : [ 'https://cdn.jsdelivr.net/npm/@scbd/www-css' ] }

const config            = { version, name: libName, propsData, dependencies }

buildLegacyWidget(config, Component)

