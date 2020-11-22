import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import { setBaseFontSize } from '@/utils/dom-device'
import { Performance } from 'web-report'
Performance({
  domain: 'http://127.0.0.1:7001/api/v1/report/web',
  add: {
    appId: '4N3YCjB1606018253703'
  }
})
Vue.use(vant)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
setBaseFontSize()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
