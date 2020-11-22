export function getType(param) {
  // 输出 [object Object] [object Array]
  const class2type = {}
  const toString = class2type.toString
  'Boolean Number String Function Array Date RegExp Object Error Symbol'
    .split(' ')
    .forEach(name => {
      class2type[`[object ${name}]`] = name.toLowerCase()
    })
  return class2type[toString.call(param)]
}

export function flatArr(array) {
  const arr = []
  if (arr.flat) {
    return arr.flat.call(array, Infinity)
  } else {
    let newArr = []
    array.forEach(item => {
      if (getType(item) === 'array') {
        const itemArr = flatArr(item)
        newArr = newArr.concat(itemArr)
      } else {
        newArr.push(item)
      }
    })
    return arr.concat(newArr)
  }
}

export function fnToString(fn) {
  const obj = {}
  return obj.hasOwnProperty.toString.call(fn)
}
// 转数组
export function toArray(param) {
  const arr = []
  return arr.slice.call(param)
}
// 合并
export function merge(first, second) {
  let len = +second.length
  let j = 0
  let i = first.length
  for (; j < len; j++) {
    first[i++] = second[j]
  }
  first.length = i
  return first
}

// 是否普通对象
export function isPlainObject(obj) {
  if (!obj || getType(obj) !== 'object') {
    return false
  }
  const proto = Object.getPrototypeOf(obj)
  // 无原型
  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }
  // Objects with prototype are plain iff they were constructed by a global Object function
  // contructor 是全局的 Object function
  const Ctor =
    Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && fnToString(Ctor) === fnToString(Object)
}

export function isEmptyObject(obj) {
  for (let name in obj) {
    return false
  }
  return true
}

function createOptions(str) {
  const obj = {}
  str.split(/\s+/).forEach(item => {
    obj[item] = true
  })
  return obj
}

/**
 *
 * @param {object} options
 * options.once
 * options.stopOnFalse
 * options.memory
 */
export const jqCallbacks = function(options) {
  options =
    typeof options === 'string'
      ? createOptions(options)
      : Object.assign({}, options)
  // flag to know if list is currently firing
  let firing
  // last fire value for non-forgettable lists
  let memory
  // flag to know if list was already fired
  let fired
  // flag to prevent firing
  let locked
  // actual callback list
  let list = []
  // queue of execution data for repeatable lists
  let queue = []
  // Index of currently firing callback (modified bby add/remove as needed)
  let firingIndex = -1
  // fire callbacks
  const fire = function() {
    // Enforce single-firing
    locked = locked || options.once
    // Execute callbacks for all pending executions
    // respecting firingIndex overrides and runtime changes
    fired = firing = true
    for (; queue.length; firingIndex = -1) {
      memory = queue.shift()
      while (++firingIndex < list.length) {
        // Run callback and check for early termination
        if (
          list[firingIndex].apply(memory[0], memory[1]) === false &&
          options.stopOnFalse
        ) {
          // Jump to end and forget the data so . add doesn't re-fire
          firingIndex = list.length
          memory = false
        }
      }
    }
    // forget the data if we're done with it
    if (!options.memory) {
      memory = false
    }
    firing = false
    // clean up if we're done firing for good
    if (locked) {
      // keep an empty list if we have data for future add calls
      if (memory) {
        list = []
        // otherwise this object is spent
      } else {
        list = ''
      }
    }
  }

  // Actual callbacks object
  const self = {
    // add a callback or a collection of callbacks to the list
    add: function() {
      if (list) {
        // If we have memory from a past run, we should fire after adding
        if (memory && !firing) {
          firingIndex = list.length - 1
          queue.push(memory)
        }
        ;(function add(args) {
          args.forEach(arg => {
            // 默认arg传入的都是函数
            if (!options.unique || !self.has(arg)) {
              list.push(arg)
            }
          })
        })(arguments)

        if (memory && !firing) {
          fire()
        }
      }
      return this
    },
    // remove a callback from the list
    remove: function() {
      arguments.forEach(arg => {
        let index
        while ((index = list.indexOf(arg) > -1)) {
          list.splice(index, 1)
          // handle firing indexes
          if (index <= firingIndex) {
            firingIndex--
          }
        }
      })
      return this
    },
    // check if a given callback is in the list.
    // If no argument is given, return whether or not list has callbacks attached
    has: function(fn) {
      return fn ? list.indexOf(fn) > -1 : list.length > 0
    },
    // remove all callbacks from the list
    empty: function() {
      if (list) {
        list = []
      }
      return this
    },
    // Disable .fire and .add
    // Abort any current/pending executions
    // Clear all callbacks and values
    disable: function() {
      locked = queue = []
      list = memory = ''
      return this
    },
    disabled: function() {
      return list
    },
    // Disable .fire
    // also disable .add unless we have memory (since it wold have no effect)
    // Abbort any pending executions
    lock: function() {
      locked = queue = []
      if (!memory && !firing) {
        list = memory = ''
      }
      return this
    },
    locked: function() {
      return !!locked
    },
    // call all callbacks with the given context and arguments
    fireWith: function(context, args) {
      if (!locked) {
        args = args || []
        args = [context, args.slice ? args.slice() : args]
        queue.push(args)
        if (!firing) {
          fire()
        }
      }
      return this
    },
    // call all the callbacks with the given arguments
    fire: function() {
      self.fireWith(this, arguments)
      return this
    },
    // To know if the callbacks have already been called at least once
    fired: function() {
      return !!fired
    }
  }
  return self
}

export function toCameraCase(str) {
  const rdashAlpha = /-([a-z])/g
  return str.replace(rdashAlpha, function(matched, matchGroup1) {
    return matchGroup1.toUpperCase()
  })
}
/* eslint-disable */
function Tween(elem, options, prop, easing) {
  return new Tween.prototype.init(elem, options, prop, end, easing)
}
Tween.prototype = {
  constructor: Tween,
  init: function(elem, options, prop, end, easing) {
    this.elem = elem
    this.prop = prop
    this.easing = easing
    this.options = options
    this.start = this.now = this.cur()
    this.end = end
    this.unit = unit || 'px'
  },
  cur: function() {}
}
Tween.prototype.init.prototype = Tween.prototype
Tween.propHooks = {
  _default: {
    get: function(tween) {
      let result
      // Use a property on the element directly when it is not a DOM element,
      // or when there is no matching style property that exists
      if (
        tween.elem.nodeType !== 1 ||
        (tween.elem[tween.prop] !== null &&
          tween.elem.style[tween.prop] === null)
      ) {
        return tween.elem[tween.prop]
      }
    }
  }
}
export const jqTween = Tween
