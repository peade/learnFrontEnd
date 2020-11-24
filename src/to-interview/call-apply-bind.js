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
