import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


// import '@/assets/font/iconfont.css'
Vue.config.productionTip = false


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import '@/assets/css/main.css'
import '@/assets/css/my-mint.scss'
import '@/assets/css/flex-box.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
