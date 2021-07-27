import { buildWidget, dependencyRef } from '@houlagins/self-embedding-component'
import { name, version              } from '../../../package.json'

import { getUnLocale                                  } from '@houlagins/locale'


import en from 'vee-validate/dist/locale/en.js'
import zh from 'vee-validate/dist/locale/zh_CN.js'
import fr from 'vee-validate/dist/locale/fr.js'
import es from 'vee-validate/dist/locale/es.js'
import ru from 'vee-validate/dist/locale/ru.js'
import ar from 'vee-validate/dist/locale/ar.js'

const dictionary = { en, zh, fr, es, ru, ar }
const locale = scbdCMSLocale () || getUnLocale()

const   regX        = new RegExp('(@[^/]+/[^/]+)', 'ig')
const [ libName ]   = name.match(regX)
const options   = {}
const propsData = { options, forceEnv:'production' }

const selfUrl = 'http://localhost:8089/dist/browser/index.js'

const VUE      = { url: 'https://cdn.cbd.int/vue@2.6.11/dist/vue.esm.browser.min.js', name: 'Vue' }
const VUE_I18N = { url: 'https://cdn.cbd.int/vue-i18n@8.24.5/dist/vue-i18n.esm.browser.min.js', name: 'VueI18n' }


const  SCBD_SSO_AUTH = { url: `https://cdn.cbd.int/@scbd/sso-vue-plugin-scbd@1.0.4/dist/browser/index.js`, name: 'sso-vue-plugin-scbd' }

const dependencies      = { all: [ VUE, VUE_I18N, SCBD_SSO_AUTH ], 
                            vuePlugins:[ VUE_I18N, SCBD_SSO_AUTH, { name:'VeeValidate', noModule: true, url: 'https://cdn.cbd.int/vee-validate@2.2.15/dist/vee-validate.min.js', options: { locale, dictionary, fieldsBagName: 'veeFields', fastExit: false }  }],
                            css       : [ 'https://cdn.cbd.int/@action-agenda/search/dist/widget/index.css', 'https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.mjs.css', 'http://localhost:8089/public/widget/index.css']
                          }

const config            = { version, name:libName, propsData, dependencies, selfUrl }

buildWidget(config)

function scbdCMSLocale () {
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}