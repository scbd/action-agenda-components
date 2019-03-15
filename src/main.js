import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import SCBDAuth from './modules/AuthPlugin/'



Vue.config.productionTip = true
Vue.config.performance =true



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
