
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'; 
import 'bootstrap/dist/css/bootstrap.css'
import swal  from 'sweetalert'


Vue.prototype.$alert = swal
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
