import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import webSocket from './assets/js/webSocket.js'
import cookie from './assets/js/cookie.js'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.webSocket = webSocket
Vue.prototype.cookie = cookie

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
