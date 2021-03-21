/**
 * flat array
 */
// 使用数组flat方法
export function arrFlat(arr) {
  const newArr = arr.flat(Infinity)
  console.log(`arrFlat`, newArr)
}
// 使用正则
export function regFlat(arr) {
  const newArr = JSON.stringify(arr)
    .replace(/\[|\]/g, '')
    .split(',')
  console.log(`regFlat`, newArr)
}

// 正则改良
export function regFlatImprove(arr) {
  const newArr = JSON.parse(
    '[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']'
  )
  console.log(`regFlatImprove`, newArr)
}
// reduce
export function reduceFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? reduceFlat(cur) : cur)
  }, [])
}
// 递归 recursion
export function recursionFlat(arr) {
  const newArr = []
  const fn = ar => {
    for (let a of ar) {
      if (Array.isArray(a)) {
        fn(a)
      } else {
        newArr.push(a)
      }
    }
  }
  fn(arr)
  return newArr
}

// https://github.com/goto-bus-stop/smol-jsonp/blob/default/index.js

const callbacks = {}
const bagName = '__jsonpCallbacks'
Object.defineProperty(window, bagName, { value: callbacks })

let jsonpIndex = 0
export function jsonp(url, opts) {
  const callbackName = 'jsonp' + jsonpIndex
  const param = (opts && opts.param) || 'callback'
  const sigil = url.indexOf('?') !== -1 ? '&' : '?'

  const s = document.createElement('script')
  s.async = true
  s.src =
    url + sigil + param + '=' + encodeURIComponent(bagName + '.' + callbackName)
  document.head.appendChild(s)
  function cleanup() {
    delete callbacks[callbackName]
    document.head.removeChild(s)
  }
  return new Promise(function(resolve, reject) {
    callbacks[callbackName] = resolve
    s.onerror = reject
    jsonpIndex += 1
  }).then(
    function(result) {
      cleanup()
      return result
    },
    function(err) {
      cleanup()
      throw err
    }
  )
}

// Array.from
export function arrayFrom() {
  const newArr = Array.from(document.querySelectorAll('div'))
  console.log('arrayFrom', newArr)
}

// sliceCall
export function sliceCall() {
  const newArr = Array.prototype.slice.call(document.querySelectorAll('div'))
  console.log('sliceCall', newArr)
}
// extendGrammar
export function extendGrammar() {
  console.log('extendGrammar', [...document.querySelectorAll('div')])
}
// concat
export function arrConcat() {
  console.log(
    'arrConcat',
    Array.prototype.concat.apply([], document.querySelectorAll('div'))
  )
}

// 使用set
export function uniqueBySet(arr) {
  const newArr = Array.from(new Set(arr))
  console.log('uniqueBySet', newArr)
  console.log('uniqueBySet', [...new Set(arr)])
}

// forSplice
export function uniqueByForSplice(array) {
  const arr = [...array]
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--
        j--
      }
    }
  }
  console.log('uniqueByForSplice', arr)
  // return newArr
}

// indexof
export function uniqueByIndexOf(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  console.log('uniqueByIndexOf', res)
}
// includes
export function uniqueByIncludes(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  console.log('uniqueByIncludes', res)
}

// filter
export function uniqueByFilter(arr) {
  const newArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  console.log('uniqueByFilter', newArr)
}
// map
export function uniqueByMap(arr) {
  const newArr = []
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      newArr.push(arr[i])
    }
  }
  console.log('uniqueByMap', newArr)
}

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
