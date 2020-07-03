export default [
  {
    path:'/hello',
    name:'Hello',
    component:()=> import('@/views/Hello'/* webpackChunkName: "Hello" */),
    meta:{title:'Hello World'}
  }
]
