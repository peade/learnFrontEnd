function compare (propertyName) {
  return function (obj1, obj2) {
    let val1 = obj1[propertyName]
    let val2 = obj2[propertyName]
    // 从小到大排序
    if (val1 < val2) {
      return -1
    } else if (val1 > val2) {
      return 1
    } else {
      return 0
    }
  }
}
