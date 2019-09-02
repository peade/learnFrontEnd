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
      name: 'dldtdd',
      component: () => import('../components/dldtdd.vue' /* webpackchunkname:dldtdd*/)
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../components/address.vue' /* webpackchunkname:address*/)
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../components/article.vue' /* webpackchunkname:article*/)
    }
  ]
})
export default routes