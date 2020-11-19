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
