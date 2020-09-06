import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 导入axios配置
import axios from './axios.js'
// 导入auth
import auth from './auth.js'

Vue.use(MintUI)
Vue.config.productionTip = false

// 注册auth
Vue.use(auth)
// 注册axios
Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
