import   Component                          from './index.js'
import   SSO                                from '@scbd/sso-vue-plugin-scbd'
import { buildLegacyWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name             , version }       from '../package.json'
import { getUnLocale       }                from '@houlagins/locale'

import en from 'vee-validate/dist/locale/en.js'
import zh from 'vee-validate/dist/locale/zh_CN.js'
import fr from 'vee-validate/dist/locale/fr.js'
import es from 'vee-validate/dist/locale/es.js'
import ru from 'vee-validate/dist/locale/ru.js'
import ar from 'vee-validate/dist/locale/ar.js'

const dictionary = { en, zh, fr, es, ru, ar }
const locale     = scbdCMSLocale() || getUnLocale()

const   options   = {}
const   propsData = { options }

const     VUE  = { url: `https://cdn.cbd.int/vue@2.6.11`, name: 'Vue' }
const VUE_I18N = { url: `https://cdn.cbd.int/vue-i18n@8.24.5`, name: 'VueI18n' }


const dependencies      = { all       : [ VUE, VUE_I18N ],
                            vuePlugins: [ VUE_I18N, { name:'VeeValidate', url: 'https://cdn.cbd.int/vee-validate@2.2.15/dist/vee-validate.min.js', options: {  locale, dictionary, fieldsBagName: 'veeFields', fastExit: false } } ],
                            css       : [ 
                              'https://cdn.cbd.int/vue-multiselect@2.1.6/dist/vue-multiselect.min.css',
                              'https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.mjs.css',
                              'https://cdn.cbd.int/@action-agenda/form/dist/widget/index.css'
                            ]
}

const config            = { version, name, propsData, dependencies }

buildLegacyWidget(Component, config, [ SSO ])

function scbdCMSLocale(){
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}