import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('../components/HelloWorld.vue' /* webpackchunkname:helloworld*/)
    },
    {
      path: '/dldtdd',
      name: 'app',
      component: () => import('../components/dldtdd.vue' /* webpackchunkname:dldtdd*/)
    }
  ]
})
export default routes