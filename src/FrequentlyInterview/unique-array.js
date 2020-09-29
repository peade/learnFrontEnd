// 使用set
export function uniqueBySet(arr) {
  const newArr = Array.from(new Set(arr))
  console.log('uniqueBySet', newArr)
  console.log('uniqueBySet', [...new Set(arr)])
}
