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
