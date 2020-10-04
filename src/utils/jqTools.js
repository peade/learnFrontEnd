/**
 * useful functions extract from jquery
 */
/**
 *
 * @param {string} code
 */
export function DomEval(code) {
  const script = document.createElement('script')
  script.text = code
  document.body.appendChild(code).parentNode.removeChild(script)
}

export function IsPlainObject(obj) {
  const toString = {}.toString
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }
  let proto = Object.getPrototypeOf(obj)
  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }
  // Objects with prototype are plain iff they were constructed by a global Object function
  const hasOwn = {}.hasOwnProperty
  const fnToString = hasOwn.toString
  const Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  const ObjectFunctionString = fnToString.call(Object)
  return (
    typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
  )
}
