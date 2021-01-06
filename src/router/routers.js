const routers = [
  {
    path: '/proto',
    name: 'Proto',
    component: () =>
      import('../views/Proto.vue' /* webpackChunkName: "proto" */),
    meta: { title: 'Proto' }
  },
  {
    path: '/fre-inte',
    name: 'FrequentlyInterview',
    component: () =>
      import(
        '../views/FrequentlyInterview.vue' /* webpackChunkName: "fre-inte" */
      ),
    meta: { title: '高频' }
  }
]
export default routers
