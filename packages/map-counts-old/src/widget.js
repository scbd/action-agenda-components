import { buildWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name       , version       } from '../package.json'

const options   = {}
const propsData = { options }

const { VUE, VUE_I18N  } = dependencyRef

const dependencies      = { all       : [ VUE, VUE_I18N ],
                            vuePlugins: [ VUE_I18N ],
                            css       : [ 'https://cdn.cbd.int/@action-agenda/map/dist/widget/index.css', 'https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.mjs.css' ] }

const config            = { version, name, propsData, dependencies }

buildWidget(config)
