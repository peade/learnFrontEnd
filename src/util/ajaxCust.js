// 简化版ajax
export const SimpleAjax = (method, url, data, async) => {
  // 实例化
  let xhr = new XMLHttpRequest()
  // 初始化
  xhr.open(method, url, async)
  // 发送请求
  xhr.send(data)
  // 返回结果处理
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}

export function ajax(options) {
  let url = options.url
  const method = options.method.toUpperCase() || 'GET'
  const async = options.async
  const data = options.data
  const xhr = new XMLHttpRequest()
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => {
      reject(new Error('请求超时'))
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        }
      }
    }
    // 错误回调
    xhr.onerror = err => reject && reject(err)
    let paramArr = []
    let encodeData
    // 处理请求参数
    if (data instanceof Object) {
      for (let key in data) {
        // 参数拼接需要通过 encodeURIComponent 进行编码
        paramArr.push(
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
      }
      encodeData = paramArr.join('&')
    }
    // get请求拼接参数
    if (method === 'get') {
      // 检测url中是否已存在 ? 及其位置
      const index = url.indexOf('?')
      if (index === -1) url += '?'
      else if (index !== url.length - 1) url += '&'
      // 拼接url
      url += encodeData
    }
    // 初始化
    xhr.open(method, url, async)
    // 发送请求
    if (method === 'GET') {
      xhr.send(null)
    } else {
      // post 方式需要设置请求头
      xhr.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded;charset=UTF-8'
      )
      xhr.send(encodeData)
    }
  })
}
