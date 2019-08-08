import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './modules/i18n'

Vue.config.productionTip = true
Vue.config.performance =true

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
