import   Component                          from './index.js'
import   SSO                                from '@scbd/sso-vue-plugin-scbd'
import { buildLegacyWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name, version           }                from '../package.json'

const options   = {}
const propsData = { options }

const { VUE, VUE_I18N } = dependencyRef.legacy


const dependencies      = {
                            all       : [ VUE, VUE_I18N, SSO ],
                            vuePlugins: [ VUE_I18N, SSO ],
                            css       : [ 'https://cdn.cbd.int/@action-agenda/view/dist/widget/index.css' ]
}

const config            = { version, name, propsData, dependencies, id: 'aa-view' }

buildLegacyWidget(Component, config, [ SSO ])
