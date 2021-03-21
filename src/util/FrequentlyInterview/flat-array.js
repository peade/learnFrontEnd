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
