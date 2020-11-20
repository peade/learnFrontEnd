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
/* eslint-disable */
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
  }
}
