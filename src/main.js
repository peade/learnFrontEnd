import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import { setBaseFontSize } from '@/utils/dom'
Vue.use(vant)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
setBaseFontSize()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
