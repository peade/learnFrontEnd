import Watcher from './watcher'

class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = this.isElementNode(el)
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.init()
      this.$el.appendChild(this.$fragment)
    }
  }
  node2Fragment(el) {
    const fragment = document.createDocumentFragment()
    let child

    // 将原生节点拷贝倒fragment
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
        self.compile(node)
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, RegExp.$1)
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
        // 事件指令
        if (self.isEventDirective(dir)) {
          compileUtil.eventHandler(node, self.$vm, exp, dir)
          // 普通指令
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
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },
  html: function (node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },
  model: function (node, vm, exp) {
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
  class: function (node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },
  bind: function () {}
}

const updater = {}

export default Compile
