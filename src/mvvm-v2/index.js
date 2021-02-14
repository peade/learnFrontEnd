import Compile from './compile'
import Watcher from './watcher'
import Observer from './observer'

class MVVM {
  constructor(options) {
    this.$options = options || {}
    this._data = this.$options.data
    const data = this._data
    const self = this
    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function (key) {
      self._proxyData(key)
    })

    this._initComputed()
    new Observer(data)
    this.$compile = new Compile(options.el || document.body, this)
  }
  $watch(key, cb) {
    new Watcher(this, key, cb)
  }
  _proxyData(key, setter) {
    const self = this
    setter =
      setter ||
      Object.defineProperty(self, key, {
        configurable: false,
        enumerable: true,
        get: function () {
          return self._data[key]
        },
        set: function (newVal) {
          self._data[key] = newVal
        }
      })
  }
  _initComputed() {
    const self = this
    const computed = this.$options.computed
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(function (key) {
        Object.defineProperty(self, key, {
          get:
            typeof computed[key] === 'function'
              ? computed[key]
              : computed[key].get,
          set: function () {}
        })
      })
    }
  }
}

export default MVVM
