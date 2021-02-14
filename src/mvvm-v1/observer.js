import Dep from './dep'

class Observer {
  constructor(data) {
    this.data = data
    this.traverse(data)
  }
  traverse(data) {
    const self = this
    Object.keys(data).forEach(function (key) {
      self.convert(key, data[key])
    })
  }
  convert(key, val) {
    this.defineReactive(this.data, key, val)
  }
  defineReactive(data, key, val) {
    const dep = new Dep()
    // 递归处理
    let childObj = observe(val)
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: false, // 不可再define更改
      get() {
        if (Dep.target) {
          dep.depend()
        }
        return val
      },
      set(newVal) {
        if (newVal === val) {
          return
        }
        val = new newVal()
        // 新的值是Object的话，进行监听
        childObj = observe(newVal)
        // 通知订阅者
        dep.notify()
      }
    })
  }
}

function observe(value) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

export default Observer