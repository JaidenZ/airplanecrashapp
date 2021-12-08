import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global from './js/webSocket.js'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.global = global


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
