// https://github.com/goto-bus-stop/smol-jsonp/blob/default/index.js

const callbacks = {}
const bagName = '__jsonpCallbacks'
Object.defineProperty(window, bagName, { value: callbacks })

let jsonpIndex = 0
export function jsonp(url, opts) {
  const callbackName = 'jsonp' + jsonpIndex
  const param = (opts && opts.param) || 'callback'
  const sigil = url.indexOf('?') !== -1 ? '&' : '?'

  const s = document.createElement('script')
  s.async = true
  s.src =
    url + sigil + param + '=' + encodeURIComponent(bagName + '.' + callbackName)
  document.head.appendChild(s)
  function cleanup() {
    delete callbacks[callbackName]
    document.head.removeChild(s)
  }
  return new Promise(function(resolve, reject) {
    callbacks[callbackName] = resolve
    s.onerror = reject
    jsonpIndex += 1
  }).then(
    function(result) {
      cleanup()
      return result
    },
    function(err) {
      cleanup()
      throw err
    }
  )
}
