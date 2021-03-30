import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  ...routers
]

const router = new VueRouter({
  routes
})

export default router
