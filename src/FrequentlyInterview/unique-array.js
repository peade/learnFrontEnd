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
