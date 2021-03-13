class FileListPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    console.log(compiler)
    // emit 是异步hook, 使用tapAsync触及它，还可以使用tapPromise/tap(同步)
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      // 在生成文件中，创建一个头部字符串
      let filelist = 'In this build:\n\n'
      // 遍历所有编译过的资源文件
      // 对于每个文件名称，都添加一行内容
      for (let filename in compilation.assets) {
        filelist += '-' + filename + '\n'
      }
      // 将这个列表作为一个新的文件资源，插入到webpack构建中
      compilation.assets['filelist.md'] = {
        source: function () {
          return filelist
        },
        size: function () {
          return filelist.length
        }
      }
      callback(null, 11)
    })
  }
}
module.exports = FileListPlugin
