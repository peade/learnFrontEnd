export default [
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('@/views/Hello' /* webpackChunkName: "Hello" */),
    meta: { title: 'Hello World' }
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () =>
      import('@/views/Loading/Loading' /* webpackChunkName: "Loading" */),
    meta: { title: 'Loading' }
  },
  {
    path: '/half-circle',
    name: 'HalfCircle',
    component: () =>
      import('@/views/HalfCircle' /* webpackChunkName: "half-circle" */),
    meta: { title: 'HalfCirlce' }
  }
]
