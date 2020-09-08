export default [
  {
    path:'/hello',
    name:'Hello',
    component:()=> import('@/views/Hello'/* webpackChunkName: "Hello" */),
    meta:{title:'Hello World'}
  },
  {
    path:'/pdf',
    name:'Pdf',
    component:()=> import('@/views/Pdf'/* webpackChunkName: "Pdf" */),
    meta:{title:'Pdfjs'}
  },
  {
    path:'/better-scroll',
    name:'BetterScroll',
    component:()=> import('@/views/BetterScrollDemo'/* webpackChunkName: "BetterScroll" */),
    meta:{title:'BetterScroll'}
  },
]
