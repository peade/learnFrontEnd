const testPlubin = {
  install: function(Vue) {
    Vue.directive('test', {
      bind: function(el, binding, vnode) {
        console.log(el)
        console.log(binding)
        console.log(binding.value)
        console.log(vnode)
      }
    })
  }
}
export default testPlubin
