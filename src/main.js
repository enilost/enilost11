import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router.js'
import store from './store/store.js'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
