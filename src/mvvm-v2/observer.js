import Dep from './dep'
class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }
  walk(data) {
    const self = this
    Object.keys(data).forEach(function (key) {
      self.convert(key, data[key])
    })
  }
  convert(key, value) {
    this.defineReactive(this.data, key, value)
  }
  defineReactive(data, key, val) {
    const dep = new Dep()
    const childObj = observe(val)

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get: function () {
        if (Dep.target) {
          dep.depend()
        }
        return val
      },
      set: function (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        childObj = observe(newVal)
        dep.notify()
      }
    })
  }
}
function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

export default Observer
