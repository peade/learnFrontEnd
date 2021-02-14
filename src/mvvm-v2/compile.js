import Watcher from './watcher'

class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.init()
      this.$el.append(this.$fragment)
    }
  }
  node2Fragment(el) {
    const fragment = document.createDocumentFragment()
    let child
    // 将原生节点拷贝到fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }
    return fragment
  }
  init() {
    this.compileElement(this.$fragment)
  }
  compileElement(el) {
    const childNodes = el.childNodes
    const self = this
    const arr = []
    arr.slice.call(childNodes).forEach(function (node) {
      const text = node.textContent
      const reg = /\{\{(.*)\}\}/
      if (self.isElementNode(node)) {
        self.compileElement(node)
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, RegExp.$1.trim())
      }
      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node)
      }
    })
  }
  compile(node) {
    const nodeAttrs = node.attributes
    const self = this
    const arr = []
    arr.slice.call(nodeAttrs).forEach(function (attr) {
      const attrName = attr.name
      if (self.isDirective(attrName)) {
        const exp = attr.value
        const dir = attrName.substring(2)
        // 指令事件
        if (self.isEventDirective(dir)) {
          compileUtil.eventHandler(node, self.$vm, exp, dir)
        } else {
          compileUtil[dir] && compileUtil[dir](node, self.$vm, exp)
        }
        node.removeAttribute(attrName)
      }
    })
  }
  compileText(node, exp) {
    compileUtil.text(node, this.$vm, exp)
  }
  isDirective(attr) {
    return attr.indexOf('v-') === 0
  }
  isEventDirective(dir) {
    return dir.indexOf('on') === 0
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
  isTextNode(node) {
    return node.nodeType === 3
  }
}
// 指令处理集合
const compileUtil = {
  text(node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },
  html(node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },
  model(node, vm, exp) {
    this.bind(node, vm, exp, 'model')

    const self = this
    const val = this._getVMVal(vm, exp)
    node.addEventListener('input', function (e) {
      const newValue = e.target.value
      if (val === newValue) {
        return
      }
      self._setVMVal(vm, exp, newValue)
      val = newValue
    })
  },
  class(node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },
  bind(node, vm, exp, dir) {
    const updaterFn = updater[dir + 'Updater']
    updaterFn && updaterFn(node, this._getVMVal(vm, exp))

    new Watcher(vm, exp, function (value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue)
    })
  },
  // 事件处理
  eventHandler(node, vm, exp, dir) {
    const eventType = dir.split(':')[1]
    const fn = vm.$options.methods && vm.$options.methods[exp]
    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false)
    }
  },
  _getVMVal(vm, exp) {
    let val = vm
    exp = exp.split('.')
    exp.forEach(function (k) {
      val = vm[k]
    })
    return val
  },
  _setVMVal(vm, exp, value) {
    let val = vm
    exp = exp.split('.')
    exp.forEach(function (k, i) {
      // 非最后一个key, 更新val的值
      if (i < exp.length - 1) {
        val = vm[k]
      } else {
        val[k] = value
      }
    })
  }
}

const updater = {
  textUpdater(node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value
  },
  htmlUpdater(node, value) {
    node.innerHTML = typeof value === 'undefined' ? '' : value
  },
  classUpdater(node, value, oldValue) {
    let className = node.className
    className = className.replace(oldValue, '').replace(/\s$/, '')
    const space = className && String(value) ? ' ' : ''
    node.className = className + space + value
  },
  modelUpdater(node, value) {
    node.value = typeof value == 'undefined' ? '' : value
  }
}

export default Compile
