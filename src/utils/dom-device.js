// 指定元素滚动到可视区域
export function eleSmoothScrollShow(ele) {
  ele.scrollIntoView({ behavior: 'smooth' })
}
// 平滑滚动到页面顶部
export function scrollToTop() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollToTop / 8)
  }
}

// 基准font-size
// iphone6 1rem=16px
export function setBaseFontSize() {
  const rate = 16 / 375
  function setSize() {
    const width = document.documentElement.clientWidth
    document.documentElement.style.fontSize = width * rate + 'px'
  }
  setSize()
  window.onresize = setSize
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
// 转义HTML
export const escapeHTML = str => {
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  )
}
