const { default: VueRouter } = require('vue-router')

class Uploader {
  constructor({ file, onProgress }) {
    this.file = file
    this.onProgress = onProgress
    // 创建唯一标识文件的fileId
    // 还可以添加用户会话标识符，以使其更具有唯一性
    this.fileId = file.name + '-' + file.size + '-' + file.lastModifiedDate
  }
  async getUploadedBytes() {
    let response = await fetch('status', {
      headers: { 'X-File-Id': this.fileId }
    })
    if (response.status !== 200) {
      throw new Error("Can't get uploaded bytes: " + response.statusText)
    }
    let text = await response.text()
    return text
  }
  async upload() {
    this.startByte = await this.getUploadedBytes()
    let xhr = (this.xhr = new XMLHttpRequest())
    xhr.open('post', 'upload', true)
    xhr.setRequestHeader('X-File-Id', this.fileId)

    xhr.setRequestHeader('X-Start-Byte', this.startByte)
    xhr.upload.onprogress = e => {
      this.onProgress(this.startByte + e.loaded, this.startByte + e.total)
    }
    console.log('send the file, starting from', this.startByte)
    xhr.send(this.file.slice(this.startByte))
    // return
    //   true —— 如果上传成功，
    //   false —— 如果被中止
    // 出现 error 时将其抛出
    return await new Promise((resolve, reject) => {
      xhr.onload = xhr.onerror = () => {
        console.log(
          'upload end status:' + xhr.status + ' text:' + xhr.statusText
        )
        if (xhr.status == 200) {
          resolve(true)
        } else {
          reject(new Error('Upload failed: ' + xhr.statusText))
        }
      }
      // onabort 仅在 xhr.abort() 被调用时触发
      xhr.onabort = () => resolve(false)
    })
  }
  stop() {
    if (this.xhr) {
      this.xhr.abort()
    }
  }
}
