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
// base64转图片文件
export const Base64ToImgFile = (basedata, filename = 'img') => {
  const arr = basedata.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}
// blog转Base64
export const BlobToBase64 = blob => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = res => {
      resolve(res.currentTarget.result)
    }
    reader.onerror = err => {
      reject(err)
    }
    reader.readAsDataURL(blob)
  })
}

// base64转blob
export const Base64ToBlob = baseData => {
  let byteString
  if (baseData.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(baseData.split(',')[1])
  } else {
    byteString = unescape(baseData.split(',')[1])
  }
  const mimeString = baseData
    .split(',')[0]
    .split(':')[1]
    .split(';')[0] //mime类型 -- image/png

  // var arrayBuffer = new ArrayBuffer(byteString.length); // 创建缓冲数组
  // var ia = new Uint8Array(arrayBuffer);// 创建视图
  const ia = new Uint8Array(byteString.length) // 创建视图
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  const blob = new Blob([ia], {
    type: mimeString
  })
  return blob
}

// file 转 blob
export const FileToBlob = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function(evt) {
      const blob = Base64ToBlob(evt.currentTarget.result)
      resolve(blob)
    }
    reader.onerror = error => {
      reject(error)
    }
    reader.readAsDataURL(file)
  })
}

// blob 转file
export const BlobToFile = (blob, fileName) => {
  return new File([blob], fileName, { type: blob.type })
}

// blob转 url
export const BlobToUrl = blob => {
  return URL.createObjectURL(blob)
}

// 文件大小
export function getFileSize(fileSize) {
  const Unit = {
    b: 'B',
    k: 'K',
    m: 'M',
    g: 'G'
  }
  let size = ''
  if (fileSize < 1024) {
    size = fileSize + Unit.b
  } else if (fileSize < 1024 * 1024) {
    size = (fileSize / 1024).toFixed(2) + Unit.k
  } else if (fileSize < 1024 * 1024 * 1024) {
    size = (fileSize / (1024 * 1024)).toFixed(2) + Unit.m
  } else {
    size = (fileSize / (1024 * 1024 * 1024)).toFixed(2) + Unit.g
  }
  return size
}
