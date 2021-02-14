import Watcher from './watcher'
import Observer from './observer'
import Compile from './compile'

class Mvvm {
  constructor(options) {
    this.$options = options
    this.data = this._data = this.$options.data
    const self = this
    Object.keys(this.data).forEach(function(key) {
      self.defineReactive(key)
    })
    this.initComputed()
    new Observer(this.data, this)
    this.$compile = new Compile(this.$options.el || document.body, this)
  }
  watch(key, cb) {
    new Watcher(this, key, cb)
  }
  defineReactive(key) {
    const self = this
    Object.defineProperty(this, key, {
      configurable: false,
      enumerable: true,
      get() {
        return self.data[key]
      },
      set(newValue) {
        self.data[key] = newValue
      }
    })
  }
  initComputed() {
    const self = this
    const computed = this.$options.computed
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(key => {
        Object.defineProperty(self, key, {
          get:
            typeof computed[key] === 'function'
              ? computed[key]
              : computed[key].get,
          set: function() {}
        })
      })
    }
  }
}

export default Mvvm
