const routers = [
  {
    path: '/proto',
    name: 'Proto',
    component: () =>
      import('../views/Proto.vue' /* webpackChunkName: "proto" */),
    meta: { title: '原型' }
  },
  {
    path: '/proto-inherit',
    name: 'ProtoInherit',
    component: () =>
      import(
        '../views/ProtoInherit.vue' /* webpackChunkName: "proto-inherit" */
      ),
    meta: { title: '原型继承' }
  },
  {
    path: '/iterator',
    name: 'Iterator',
    component: () =>
      import('../views/Iterator.vue' /* webpackChunkName: "fre-Iterator" */),
    meta: { title: '迭代器' }
  },
  {
    path: '/decorator',
    name: 'Decorator',
    component: () =>
      import('../views/Decorator.vue' /* webpackChunkName: "fre-decorator" */),
    meta: { title: '装饰器' }
  },
  {
    path: '/learn-object',
    name: 'LearnObject',
    component: () =>
      import(
        '../views/LearnObject.vue' /* webpackChunkName: "fre-learn-object" */
      ),
    meta: { title: '对象' }
  },
  {
    path: '/learn-class',
    name: 'LearnClass',
    component: () =>
      import(
        '../views/LearnClass.vue' /* webpackChunkName: "fre-learn-class" */
      ),
    meta: { title: '类' }
  },
  {
    path: '/learn-generator',
    name: 'LearnGnerator',
    component: () =>
      import(
        '../views/Generator.vue' /* webpackChunkName: "fre-learn-generator" */
      ),
    meta: { title: 'Generator' }
  },
  {
    path: '/proxy-reflect',
    name: 'ProxyReflect',
    component: () =>
      import(
        '../views/ProxyReflect.vue' /* webpackChunkName: "fre-proxy-reflect" */
      ),
    meta: { title: '代理反射' }
  },
  {
    path: '/currying',
    name: 'Currying',
    component: () =>
      import('../views/Currying.vue' /* webpackChunkName: "fre-currying" */),
    meta: { title: '柯里化' }
  },
  {
    path: '/ds-algo',
    name: 'DsAlgo',
    component: () =>
      import('../views/DsAlgo.vue' /* webpackChunkName: "fre-ds-algo" */),
    meta: { title: '数据结构与算法一' }
  },
  {
    path: '/stack',
    name: 'Stack',
    component: () =>
      import('../views/Stack.vue' /* webpackChunkName: "fre-stack" */),
    meta: { title: '栈' }
  },
  {
    path: '/input',
    name: 'InputId',
    component: () =>
      import('../views/html/InputId.vue' /* webpackChunkName: "fre-input" */),
    meta: { title: 'Input' }
  },
  {
    path: '/fre-inte',
    name: 'FrequentlyInterview',
    component: () =>
      import(
        '../views/FrequentlyInterview.vue' /* webpackChunkName: "fre-inte" */
      ),
    meta: { title: '其他' }
  }
]
export default routers
