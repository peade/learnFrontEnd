import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  ...routers
]

const router = new VueRouter({
  routes
})

export default router
