import Vue from 'vue'
import Router from 'vue-router'
import RouteList from './routes'
Vue.use(Router)
let routes = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index.vue' /* webpackchunkname:index*/)
    }
  ].concat(RouteList)
})
export default routes
