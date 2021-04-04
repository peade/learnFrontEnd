import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/Index.vue'),
    meta: { title: 'Index' }
  },
  {
    path: '/pro-inj',
    name: 'ProInj',
    component: () =>
      import(/* webpackChunkName: "pro-inj" */ '../views/ProvideInject.vue'),
    meta: { title: 'pro-inj' }
  }
]

const router = new VueRouter({
  routes
})

export default router
