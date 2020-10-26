import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router/index'

import Confirm from './components/Confirm/index'

Vue.config.productionTip = false
=======
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
>>>>>>> master

Vue.use(Confirm)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
