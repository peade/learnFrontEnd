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
  },
  {
    path: '/chain-responsibility',
    name: 'ChainResponsibility',
    component: () =>
      import(
        '@/views/ChainOfResponsibilityPattern' /* webpackChunkName: "chain-responsibility"  */
      ),
    meta: { title: '责任链' }
  },

  {
    path: '/command',
    name: 'Command',
    component: () =>
      import('@/views/CommandPattern' /* webpackChunkName: "command"  */),
    meta: { title: '命令' }
  },
  {
    path: '/interpreter',
    name: 'Interpreter',
    component: () =>
      import(
        '@/views/InterpreterPattern' /* webpackChunkName: "interpreter"  */
      ),
    meta: { title: '解释器' }
  },
  {
    path: '/iterator',
    name: 'Iterator',
    component: () =>
      import('@/views/IteratorPattern' /* webpackChunkName: "iterator"  */),
    meta: { title: '迭代器' }
  },
  {
    path: '/mediator',
    name: 'Mediator',
    component: () =>
      import('@/views/MediatorPattern' /* webpackChunkName: "mediator"  */),
    meta: { title: '中介者' }
  },
  {
    path: '/memento',
    name: 'Memento',
    component: () =>
      import('@/views/MementoPattern' /* webpackChunkName: "memento"  */),
    meta: { title: '备忘录' }
  },
  {
    path: '/observer',
    name: 'Observer',
    component: () =>
      import('@/views/ObserverPattern' /* webpackChunkName: "observer"  */),
    meta: { title: '观察者' }
  },
  {
    path: '/state',
    name: 'State',
    component: () =>
      import('@/views/StatePattern' /* webpackChunkName: "state"  */),
    meta: { title: '状态' }
  },
  {
    path: '/null-object',
    name: 'NullObject',
    component: () =>
      import(
        '@/views/NullObjectPattern' /* webpackChunkName: "null-object"  */
      ),
    meta: { title: '空对象' }
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: () =>
      import('@/views/StrategyPattern' /* webpackChunkName: "strategy"  */),
    meta: { title: '策略' }
  },
  {
    path: '/template',
    name: 'Template',
    component: () =>
      import('@/views/TemplatePattern' /* webpackChunkName: "template"  */),
    meta: { title: '模板' }
  },
  {
    path: '/visitor',
    name: 'Visitor',
    component: () =>
      import('@/views/VisitorPattern' /* webpackChunkName: "visitor"  */),
    meta: { title: '访问者' }
  },
  {
    path: '/business-delegate',
    name: 'BusinessDelegate',
    component: () =>
      import(
        '@/views/BusinessDelegatePattern' /* webpackChunkName: "business-delegate"  */
      ),
    meta: { title: '业务代表' }
  },
  {
    path: '/composite-entity',
    name: 'CompositeEntity',
    component: () =>
      import(
        '@/views/CompositeEntityPattern' /* webpackChunkName: "composite-entity"  */
      ),
    meta: { title: '组合实体' }
  },
  {
    path: '/data-access-object',
    name: 'DataAccessObject',
    component: () =>
      import(
        '@/views/DataAccessObjectPattern' /* webpackChunkName: "data-access-object"  */
      ),
    meta: { title: '数据访问对象' }
  },
  {
    path: '/front-controller',
    name: 'FrontController',
    component: () =>
      import(
        '@/views/FrontControllerPattern' /* webpackChunkName: "front-controller"  */
      ),
    meta: { title: '前端控制器' }
  },
  {
    path: '/intercepting',
    name: 'InterceptingFilter',
    component: () =>
      import(
        '@/views/InterceptingFilterPattern' /* webpackChunkName: "intercepting"  */
      ),
    meta: { title: '拦截过滤器' }
  },
  {
    path: '/mvc',
    name: 'MVC',
    component: () =>
      import('@/views/MVCPattern' /* webpackChunkName: "mvc"  */),
    meta: { title: 'MVC' }
  },
  {
    path: '/service-locator',
    name: 'ServiceLocator',
    component: () =>
      import(
        '@/views/ServiceLocatorPattern' /* webpackChunkName: "service-locator"  */
      ),
    meta: { title: '服务定位' }
  },
  {
    path: '/transfer-object',
    name: 'TransferObject',
    component: () =>
      import(
        '@/views/TransferObjectPattern' /* webpackChunkName: "transfer-object"  */
      ),
    meta: { title: '传输对象' }
  }
]
export default routers
