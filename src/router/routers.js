const routers = [
  {
    path: '/proto',
    name: 'Proto',
    component: () =>
      import('../views/Proto.vue' /* webpackChunkName: "proto" */),
    meta: { title: '原型' }
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
