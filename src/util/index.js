// 深克隆
export function DeepClone(obj, hash = new WeakMap()) {
  if (obj === null) {
    return obj
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (typeof obj !== 'object') {
    return obj
  }
  if (hash.get(obj)) {
    return hash.get(obj)
  }
  let cloneObj = new obj.constructor()
  hash.set(obj, cloneObj)
  for (let key in obj) {
    cloneObj[key] = DeepClone(obj[key], hash)
  }
  return cloneObj
}

// jsonp原理
// jsonp 请求时带上callback参数，后端收到请求后，会用callback参数值对数据进行一次组装，
// 例如 params.query.callback+'('+data+')'
// 前端收到请求后，调用callback参数名相同的方法
let jsonpId = 0
export function jsonp(options) {
  const container = document.body
  if (!options || !options.url) {
    return
  }
  let scriptNode = document.createElement('script')
  let data = options.data || {}
  let url = options.url
  let callback = options.callback
  let fnName = 'jsonp' + jsonpId++
  data['callback'] = fnName
  let params = []
  for (let k in data) {
    params.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
  }
  url = url.indexOf('?') > 0 ? url + '&' : url + '?'
  url += params.join('&')
  scriptNode.src = url
  // 执行回调方法，删除标签和全局函数
  window[fnName] = function(res) {
    callback && callback(res)
    container.removeChild(scriptNode)
    delete window[fnName]
  }
  // 请求出错处理
  scriptNode.onerror = function() {
    callback && callback({ error: 'error' })
    container.removeChild(scriptNode)
    window[fnName] && delete window[fnName]
  }
  scriptNode.type = 'text/javascript'
  container.appendChild(scriptNode)
}

// 获取系统
function GetSystem() {
  if (navigator) {
    if (-1 !== navigator.platform.indexOf('Win')) return 'Windows'
    if (-1 !== navigator.platform.indexOf('Mac')) return 'MacOS'
    if (-1 !== navigator.platform.indexOf('X11')) return 'UNIX'
    if (-1 !== navigator.platform.indexOf('Linux')) return 'Linux'
    const ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/i.test(ua)) {
      return 'iOS'
    } else if (/android/i.test(ua)) {
      return 'Android'
    }
    //   if (-1 !== e.indexOf("iphone"))
    //       return "iPhone";
    //   if (-1 !== e.indexOf("ipod"))
    //       return "iPod";
    //   if (-1 !== e.indexOf("ipad"))
    //       return "iPad";
    //   if (-1 !== e.indexOf("android"))
    //       return "Android"
  }
  return 'Unknown'
}
// 获取浏览器
function GetBrowser() {
  const ua = navigator.userAgent
  let b = 'Unknown'
  if (/QQ\/[0-9]+/.test(ua)) {
    b = 'QQ'
  } else if (
    /QQBrowser/.test(ua) &&
    !(/QQ\//.test(ua) || /MicroMessenger/.test(ua))
  ) {
    b = 'QQBrowser'
  } else if (/MicroMessenger/.test(ua)) {
    b = 'wechat'
  } else if (/baidubrowser/.test(ua)) {
    b = 'baiduBrowser'
  } else if (/UCBrowser/.test(ua)) {
    b = 'UCBrowser'
  } else if (/Chrome\/(\S*) Mobile/.test(ua)) {
    b = 'ChromeMobile'
  } else if (/Chrome\//.test(ua)) {
    b = 'Chrome'
  } else if (/SogouMobileBrowser/.test(ua)) {
    b = 'SogouMobileBrowser'
  } else if (/MiuiBrowser\/(\S*)/.test(ua)) {
    b = 'MiuiBrowser'
  } else if (
    /HUAWEI/i.test(ua) &&
    !(
      /baiduboxapp/.test(ua) ||
      /QQBrowser/.test(ua) ||
      /UCBrowser/.test(ua) ||
      /MicroMessenger/.test(ua)
    )
  ) {
    b = 'HuaWeiBrowser'
  }
  return b
}
// 获取设备信息
export function GetDeviceInfo() {
  return {
    system: GetSystem(),
    browser: GetBrowser()
  }
}
