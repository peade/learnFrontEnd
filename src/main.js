import Vue from 'vue'
import App from './App.vue'
import Confirm from './plugins/Confirm/index'

import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/app.scss'
import DefaultImg from '@/plugins/DefaultImg/default-img'
Vue.use(vant)
Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(Confirm)
Vue.use(DefaultImg)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
