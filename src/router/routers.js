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
  },
  {
    path: '/proto',
    name: 'Proto',
    component: () => import('@/views/Proto' /* webpackChunkName: "proto"  */),
    meta: { title: '原型式' }
  },
  {
    path: '/adapter',
    name: 'Adapter',
    component: () =>
      import('@/views/AdapterPattern' /* webpackChunkName: "adapter"  */),
    meta: { title: '适配器' }
  },
  {
    path: '/bridge',
    name: 'Bridge',
    component: () =>
      import('@/views/BridgePattern' /* webpackChunkName: "bridge"  */),
    meta: { title: '桥接' }
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () =>
      import('@/views/FilterPattern' /* webpackChunkName: "filter"  */),
    meta: { title: '过滤器' }
  },
  {
    path: '/composite',
    name: 'Composite',
    component: () =>
      import('@/views/CompositePattern' /* webpackChunkName: "composite"  */),
    meta: { title: '组合模式' }
  },
  {
    path: '/decorator',
    name: 'Decorator',
    component: () =>
      import('@/views/DecoratorPattern' /* webpackChunkName: "decorator"  */),
    meta: { title: '装饰器' }
  },
  {
    path: '/facade',
    name: 'Facade',
    component: () =>
      import('@/views/FacadePattern' /* webpackChunkName: "facade"  */),
    meta: { title: '外观' }
  },
  {
    path: '/flyweight',
    name: 'Flyweight',
    component: () =>
      import('@/views/FlyweightPattern' /* webpackChunkName: "flyweight"  */),
    meta: { title: '享元' }
  },
  {
    path: '/proxy',
    name: 'Proxy',
    component: () =>
      import('@/views/ProxyPattern' /* webpackChunkName: "proxy"  */),
    meta: { title: '代理' }
  }
]
export default routers
