import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () =>
        import('@/views/Index.vue' /* webpackChunkName: "index" */)
    },
    {
      path: '/text',
      name: 'Text',
      component: () => import('@/views/Text.vue' /* webpackChunkName: "Text" */)
    },
    {
      path: '/doc',
      name: 'Doc',
      component: () => import('@/views/Doc.vue' /* webpackChunkName: "Doc" */)
    },
    {
      path: '/embed',
      name: 'Embed',
      component: () =>
        import('@/views/Embed.vue' /* webpackChunkName: "embed" */)
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/views/Form.vue' /* webpackChunkName: "form" */)
    }
  ]
})

export default router
