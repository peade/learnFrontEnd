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
  },
  {
    path: '/insu-vali',
    name: 'InsuValidate',
    component: () =>
      import('@/views/InsuValidate.vue' /* webpackChunkName:"InsuValidate" */),
    meta: { title: 'InsuValidate' }
  },
  {
    path: '/kuaidi100',
    name: 'KuaiDi100',
    component: () =>
      import('@/views/KuaiDi100.vue' /* webpackChunkName:"KuaiDi100" */),
    meta: { title: 'KuaiDi100' }
  },
  {
    path: '/compress-image',
    name: 'CompressImage',
    component: () =>
      import(
        '@/views/CompressImage.vue' /* webpackChunkName:"CompressImage" */
      ),
    meta: { title: 'CompressImage' }
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
