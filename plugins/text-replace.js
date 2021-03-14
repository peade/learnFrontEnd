const through2 = require('through2')

exports.replaceFn = function (reg, str) {
  return through2.obj(function (file, _, callback) {
    if (file.isBuffer()) {
      let content = file.contents.toString()
      content = content.replace(reg, str)
      file.contents = Buffer.from(content)
    }
    callback(null, file)
  })
}
