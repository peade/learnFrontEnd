/**
 * flat array
 */
// 使用数组flat方法
export function arrFlat(arr) {
  return arr.flat(Infinity)
}
// 使用正则
export function regFlat(arr) {
  return JSON.stringify(arr)
    .replace(/\[|\]/g, '')
    .split(',')
}

// 正则改良
export function regFlatImprove(arr) {
  return JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']')
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
