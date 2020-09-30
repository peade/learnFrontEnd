// 防抖
// 触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。
export function debounce(fn, time) {
  let timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}
// 节流
// 高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。
export function throttle(fn, time) {
  let flag = true
  return function() {
    if (!flag) {
      return
    }
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, time)
  }
}
// proto inherit
export function protoInherit() {
  function Parent() {
    this.name = 'parent'
  }
  function Child() {
    Parent.call(this)
    this.type = 'children'
  }
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}
