Function.prototype.custCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  context = context || window
  context.fn = this
  let arg = [...arguments].slice(1)
  let result = context.fn(...arg)
  delete context.fn
  return result
}

Function.prototype.myapply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

export function instanceOf(left, right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  // const A = true
  let bo = true
  while (bo) {
    if (leftValue === null) {
      bo = false
      return false
    }
    if (leftValue === rightValue) {
      bo = false
      return true
    }
    leftValue = leftValue.__proto__
  }
}
