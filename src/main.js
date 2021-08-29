import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Web3 from 'web3'

Vue.use(ElementUI)

Vue.config.productionTip = false
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
Vue.prototype.web3 = web3
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
