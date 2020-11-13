import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import { setBaseFontSize } from '@/utils/dom-device'

import { CtiClass } from '@/fn-test/cti-class'
import '@/fn-test/win-cti'
// window.CtiSoftPhone.initOcxEle()
try {
  const ncti = new CtiClass()
  ncti.print({ evtText: 'cticlass' })
  // window.CtiSoftPhone = new CtiClass()
  // window.CtiSoftPhone.setCtiInfo({ evtText: 'cticlass' })
} catch (e) {
  alert('cti class ' + e)
}
Vue.use(vant)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
setBaseFontSize()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
