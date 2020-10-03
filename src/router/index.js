import Vue from 'vue'
import Router from 'vue-router'
export const routesConfig = [
  {
    path: '/h2m',
    name: 'Html2Markdown',
    component: () => import('@/views/H2M' /* webpackChunkName:"h2m" */),
    meta: { title: 'h2m' }
  },
  {
    path: '/pea-promise',
    name: 'promise',
    component: () =>
      import('@/views/PeadePromise.vue' /* webpackChunkName:"Promise" */),
    meta: { title: 'Promise' }
  },
  {
    path: '/deep-clone',
    name: 'DeepClone',
    component: () =>
      import('@/views/DeepClone.vue' /* webpackChunkName:"DeepClone" */),
    meta: { title: 'DeepClone' }
  }
]
Vue.use(Router)
let routes = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () =>
        import('@/views/Index.vue' /* webpackChunkName:"index" */)
    }
  ].concat(routesConfig)
})
export default routes
