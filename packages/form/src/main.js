import   Vue           from 'vue'
import   VueI18n       from 'vue-i18n'
import   App           from '../public/App.vue'
import   Auth          from '@scbd/sso-vue-plugin-scbd'
import   VeeValidate   from 'vee-validate'
import { getUnLocale } from '@houlagins/locale'

import en from 'vee-validate/dist/locale/en.js'
import zh from 'vee-validate/dist/locale/zh_CN.js'
import fr from 'vee-validate/dist/locale/fr.js'
import es from 'vee-validate/dist/locale/es.js'
import ru from 'vee-validate/dist/locale/ru.js'
import ar from 'vee-validate/dist/locale/ar.js'

const dictionary = { en, zh, fr, es, ru, ar }
const locale     = scbdCMSLocale () || getUnLocale()

Vue.use(VueI18n)
Vue.use(Auth, { forceEnv: 'production' })
Vue.use(VeeValidate, { dictionary, locale, fieldsBagName: 'veeFields', fastExit: false })

const i18n = new VueI18n({ locale, fallbackLocale: 'en', messages: { en: {} } })

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

function scbdCMSLocale () {
  if(typeof window === 'undefined') return ''

  const pref = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, '$1')

  if(pref) return (pref.replace('Locale=', ''))

  return ''
}