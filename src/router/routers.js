const routers = [
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
