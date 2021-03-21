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

export function DeepClone(target, hash = new WeakMap()) {
  // 对传入的参数处理
  if (typeof target !== 'object' || target === null) {
    return target
  }
  // 哈希表中存在，直接返回
  if (hash.has(target)) {
    return hash.get(target)
  }
  const cloneTarget = Array.isArray(target) ? [] : {}
  hash.set(target, cloneTarget)
  // 针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target)
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {
        cloneTarget[symKey] = DeepClone(target[symKey])
      } else {
        cloneTarget[symKey] = target[symKey]
      }
    })
  }
  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] =
        typeof target[i] === 'object' && target[i] !== null
          ? DeepClone(target[i], hash)
          : target[i]
    }
  }
  return cloneTarget
}
