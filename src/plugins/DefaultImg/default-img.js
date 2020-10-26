function Install(Vue) {
  Vue.directive('imgerr', {
    // 当元素被插入到DOM中时...
    inserted: function() {},
    // 绑定，只调用1次
    bind: function(el, binding) {
      el.onerror = function() {
        el.src = binding.value
      }
    },
    update: function() {},
    componentUpdated: function() {},
    // 解绑时调用
    unbind: function() {}
  })
}

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(Install)
// }
export default Install
