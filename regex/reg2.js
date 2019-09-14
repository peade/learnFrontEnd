let str = '中国|国庆阅兵|十周年大阅兵|祝福中国'
let reg = /(^)?([^|]+)($)?/g
let result = str.match(reg)
console.log(result)