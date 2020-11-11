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

// 数字千分
export const numStrThousandSplit = numStr =>
  numStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// listToTree
// 数组列表转树形结构
export function listToTree(
  data,
  pid,
  pidName = 'parentId',
  idName = 'id',
  childrenName = 'children'
) {
  let arr = []
  data.forEach(item => {
    if (item[pidName] === pid) {
      item[childrenName] = listToTree(
        data,
        item[idName],
        pidName,
        idName,
        childrenName
      )
      arr.push(item)
    }
  })
  return arr
}
export const createTree = (items, id = null, link = 'pid') => {
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: createTree(items, item.id) }))
}

// treeToList
// 树形结构转数组
export function treeToList(data, childrenName = 'children') {
  let arr = []
  data.forEach(item => {
    const obj = {}
    for (const k in item) {
      if (k !== childrenName) {
        obj[k] = item[k]
      }
    }
    arr.push(obj)
    if (item[childrenName]) {
      const childrenArr = treeToList(item[childrenName], childrenName)
      arr = arr.comcat(childrenArr)
    }
  })
  return data
}
