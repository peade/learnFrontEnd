export function getType(param) {
  // 输出 [object Object] [object Array]
  const class2type = {}
  const toString = class2type.toString
  'Boolean Number String Function Array Date RegExp Object Error Symbol'
    .split(' ')
    .forEach(name => {
      class2type[`[object ${name}]`] = name.toLowerCase()
    })
  return class2type[toString.call(param)]
}

export function flatArr(array) {
  const arr = []
  if (arr.flat) {
    return arr.flat.call(array, Infinity)
  } else {
    let newArr = []
    array.forEach(item => {
      if (getType(item) === 'array') {
        const itemArr = flatArr(item)
        newArr = newArr.concat(itemArr)
      } else {
        newArr.push(item)
      }
    })
    return arr.concat(newArr)
  }
}

export function fnToString(fn) {
  const obj = {}
  return obj.hasOwnProperty.toString.call(fn)
}
// 转数组
export function toArray(param) {
  const arr = []
  return arr.slice.call(param)
}
// 合并
export function merge(first, second) {
  let len = +second.length
  let j = 0
  let i = first.length
  for (; j < len; j++) {
    first[i++] = second[j]
  }
  first.length = i
  return first
}

// 是否普通对象
export function isPlainObject(obj) {
  if (!obj || getType(obj) !== 'object') {
    return false
  }
  const proto = Object.getPrototypeOf(obj)
  // 无原型
  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }
  // Objects with prototype are plain iff they were constructed by a global Object function
  // contructor 是全局的 Object function
  const Ctor =
    Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && fnToString(Ctor) === fnToString(Object)
}

export function isEmptyObject(obj) {
  for (let name in obj) {
    return false
  }
  return true
}
