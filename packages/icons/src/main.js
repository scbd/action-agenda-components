import Vue from 'vue'
import App from '../public/App.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({ locale: 'zh', fallbackLocale: 'en', messages: { en: {} } })

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
