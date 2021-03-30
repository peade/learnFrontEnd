const routers = [
  {
    path: '/factory',
    name: 'Factory',
    component: () =>
      import('@/views/FactoryPattern' /* webpackChunkName: "factory"  */),
    meta: { title: '工厂模式' }
  },
  {
    path: '/single',
    name: 'Single',
    component: () =>
      import('@/views/SingletonPattern' /* webpackChunkName: "single"  */),
    meta: { title: '单例模式' }
  },
  {
    path: '/constructor',
    name: 'construct',
    component: () =>
      import('@/views/Constructor' /* webpackChunkName: "construct"  */),
    meta: { title: '构造者' }
  }
]
export default routers
