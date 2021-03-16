export class DeepClone {
  constructor() {
    this.cloneVal = null
  }
  /** 判断是否对象，即引用类型 */
  isObj(val) {
    return (
      (typeof val === 'object' || typeof val === 'function') && val !== null
    )
  }
  /* 获取具体类型 */
  getType(data) {
    const str = Object.prototype.toString.call(data)
    return str.match(/\[object (.*?)\]/)[1].toLowerCase()
  }
  clone(val, map = new WeakMap()) {
    if (this.isObj(val)) {
      const type = this.getType(val)
      let newVal = null
      switch (type) {
        case 'date':
          newVal = new Date(val.getTime())
          break
        case 'regexp':
          newVal = new RegExp(val.source, val.flags)
          break
        case 'function':
          newVal = new Function('return ' + val.toString())()
          break
        default:
          this.cloneVal = Array.isArray(val) ? [] : {}
          if (map.has(val)) {
            newVal = map.get(val)
          } else {
            for (let key in val) {
              /* eslint-disable-next-line */
              if (val.hasOwnProperty(key)) {
                this.cloneVal[key] = new DeepClone().clone(val[key], map)
              }
            }
            newVal = this.cloneVal
          }
      }
      return newVal
    } else {
      return val
    }
  }
}
