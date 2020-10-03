export function simpleJsonp(req) {
  const script = document.createElement('script')
  const url = req.url + '?callback=' + req.callback.name
  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}

let id = 0
/**
 * @name reliableJsonp
 * @param {object} options
 * @param {string} options.url
 * @param {function} options.callback
 * @param {object} options.data
 */
export function reliableJsonp(options) {
  if (!options || !options.url) {
    return
  }
  const script = document.createElement('script')
  const data = options.data || {}
  let url = options.url
  const callback = options.callback
  const fnName = '__jsonp' + id++
  data['callback'] = fnName
  // 拼接url
  const params = []
  for (let key in data) {
    params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  }
  url = url.indexOf('?') > 0 ? url + '&' : url + '?'
  url += params.join('&')
  script.src = url
  // 传递的是一个匿名函数，要执行的话，暴露为一个全局方法
  window[fnName] = function(res) {
    callback && callback(res)
    document.head.removeChild(script)
    delete window[fnName]
  }
  // 出错处理
  script.onerror = function() {
    callback && callback({ error: 'error' })
    document.head.removeChild(script)
    window[fnName] && delete window[fnName]
  }
  document.head.appendChild(script)
}
