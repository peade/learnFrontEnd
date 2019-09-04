import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('../components/HelloWorld.vue' /* webpackchunkname:helloworld */)
    },
    {
      path: '/dldtdd',
      name: 'dldtdd',
      component: () => import('../components/dldtdd.vue' /* webpackchunkname:dldtdd */)
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../components/address.vue' /* webpackchunkname:address */)
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../components/article.vue' /* webpackchunkname:article */)
    },
    {
      path: '/blockquote',
      name: 'blockquote',
      component: () => import('../components/blockquote.vue' /* webpackchunkname:blockquote */)
    },
    {
      path: '/figure',
      name: 'figure',
      component: () => import('../components/figure.vue' /* webpackchunkname:figure */)
    },
    {
      path: '/pre',
      name: 'pre',
      component: () => import('../components/pre.vue' /* webpackchunkname:pre */)
    },
    {
      path: '/abbr',
      name: 'abbr',
      component: () => import('../components/abbr.vue' /* webpackchunkname:abbr */)
    },
    {
      path: '/cite',
      name: 'cite',
      component: () => import('../components/cite.vue' /* webpackchunkname:cite */)
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../components/code.vue' /* webpackchunkname:code */)
    },
    {
      path: '/subsup',
      name: 'subsup',
      component: () => import('../components/subsup.vue' /* webpackchunkname:subsup */)
    },
    {
      path: '/insdel',
      name: 'insdel',
      component: () => import('../components/insdel.vue' /* webpackchunkname:insdel */)
    }
  ]
})
export default routes