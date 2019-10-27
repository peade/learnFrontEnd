let str = '中国|国庆阅兵|十周年大阅兵|祝福中国'
let reg = /(^)?([^|]+)($)?/g
let regMethods = /国庆/g
// match
// 没有匹配中，返回null，
// 不带g的正则，返回一个数组，[匹配中的值，index:匹配中的位置, inpt:原字符串]
// 带g的正则，返回一个所有匹配值的数组 [匹配中的值...]
let matchResult = str.match(reg)
let matchResult2 = str.match(/中/)

console.log('match', matchResult, matchResult2)

// search 返回匹配中的字符串的位置，为查找到字符串时，返回 -1
let searchResult = str.search(/国/)
console.log('search', searchResult)

// replace 根据正则条件，替换匹配上的字符 原字符串不变，返回新字符串
let str2 = str.replace(/国/g, '华')
console.log(str, str2)

// test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
console.log('test', reg.test(str), regMethods.test(str))

//exec() 方法用于检索字符串中的正则表达式的匹配。
// 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
console.log('exec', /国庆/g.exec(str))

let regStr = '阅兵'
let expReg = RegExp(regStr, 'i')
console.log('regexp', str.search(expReg))