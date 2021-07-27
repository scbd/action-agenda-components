import Vue     from 'vue'
import VueI18n from 'vue-i18n'
import App     from '../public/App.vue'
import Auth    from '@scbd/sso-vue-plugin-scbd'

Vue.use(VueI18n)
Vue.use(Auth, { forceEnv: 'production' })

const i18n = new VueI18n({ locale: 'zh', fallbackLocale: 'en', messages: { en: {} } })

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
