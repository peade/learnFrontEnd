// 将url字符串解析成对象，尽可能多的解析信息

function parseUrl(url) {
  const obj = {}
  // prototocal
  const m = url.match(/^https?:\/\//g)
  obj.protocal = m[0]
  // origin
  const newStr = url.replace(obj.protocal, '')
  const firstsplit = newStr.indexOf('/')
  const originLen = firstsplit + obj.protocal.length
  if (firstsplit > -1) {
    obj.origin = url.substr(0, originLen)
    // obj.origin = obj.protocal + newStr.split('/')[0]
  } else {
    obj.origin = url
  }
  // port
  if (obj.origin.indexOf(':')) {
    obj.port = obj.origin.split(':')[1]
  }

  // hash
  const hashIndex = url.indexOf('#')
  if (hashIndex > -1) {
    obj.hash = '#' + url.split('#')[1]
  }
  // search
  const searchUrl = url.split('#')[0]
  const searchIdx = searchUrl.indexOf('?')
  if (searchIdx > -1) {
    obj.search = '?' + searchUrl.split('?')[1]
  }
  // pathname
  if (searchIdx > -1) {
    obj.pathname = url.substring(originLen + 1, searchIdx)
  } else {
    obj.pathname = url.substr(originLen)
  }
  // pathname

  console.log(obj)
}

parseUrl('https://www.baidu.com:8080/index.html?abc=123123#/def')
console.dir(parseUrl)
