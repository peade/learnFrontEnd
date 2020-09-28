/**
 * flat array
 */
const arr = [1, [2, [3, [4, 5]]], 6]
console.log(arr)
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
