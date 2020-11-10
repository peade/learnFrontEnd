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

export function GenerateUUID(len, radix) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
    ''
  )
  const uuid = []
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    // rfc4122, version 4 form
    let r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}

// 元素是否在视图里
export const inViewport = el => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top > 0 &&
    rect.bottom < window.innerHeight &&
    rect.left > 0 &&
    rect.right < window.innerWidth
  )
}
// 图片文件转base64
export const ImgFileToBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = res => {
      console.log('loaded')
      resolve(res.currentTarget.result)
    }
    reader.onerror = err => {
      console.log(err)
      reject(err)
    }
    reader.readAsDataURL(file)
  })
}
