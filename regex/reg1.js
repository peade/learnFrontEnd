let r1 = /hello/
console.log(r1.test('hello'))

// 横向模糊匹配 一个正则可匹配的字符串的长度不是固定的，可以是多种情况的
// 匹配多个
let r2 = /ab{2,5}c/g
let str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
console.log(str.match(r2))

// 纵向模糊匹配 一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能。
let r3 = /a[123]b/g
let str3 = "a0b a1b a2b a3b a4b"
console.log(str3.match(r3))

// 字符组 []内部
// 字符组范围  [1-6a-fG-M] 1到6,a到f,G到M的字符
// 排除字符组 [^abc] 除abc外的其他字符


// 贪婪比配 和 惰性匹配
// 默认是 贪婪匹配的, 即尽可能多匹配
// /\d{2,5}/  表示数字连续出现 2 到 5 次。会匹配 2 位、3 位、4 位、5 位连续数字

// 惰性匹配 尽可能少的匹配, 量词后面加 ? 就能实现惰性匹配
// /\d{2,5}?/   表示，虽然 2 到 5 次都行，当 2 个就够的时候，就不再往下尝试了
let r4 = /\d{2,5}?/g;
let str4 = "123 1234 12345 123456"
console.log(str4.match(r4)) // [ '12', '12', '34', '12', '34', '12', '34', '56' ]

// 多选分支  
let r5 = /good|nice/g
let str5 = 'good idea, nice try.'
console.log('多选', str5.match(r5))
// 分支结构是 惰性的，当前面的匹配上了，后面的就不再尝试了

// 实践 匹配16进制颜色值
let r6 = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
let str6 = "#ffbbad #Fc01DF #FFF #ffE"
console.log('color', str6.match(r6))

// 匹配 小时分钟 23:01
let r7 = /^([01][0-9]|2[0-3]):[0-5][0-9]$/
console.log('hh:mm', r7.test('23:59'))
console.log('hh:mm', r7.test('03:07'))
// 匹配1:9
let r8 = /^(0?[0-9]|[01][0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/
console.log('hh:mm', r8.test('23:59'))
console.log('hh:mm', r8.test('03:07'))
console.log('hh:mm', r8.test('3:0'))

// 匹配年月日 YYYY-MM-DD
let r9 = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/
console.log('yyyy-mm-dd', r9.test('2017-07-05'))

// windows 文件路径匹配
let r10 = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/
console.log('windows path', r10.test("F:\\study\\javascript\\regex\\regular expression.pdf"))
console.log('win path', r10.test('F:\\'))

// 匹配id
let r11 = /id="[^"]*?"/
let str11 = '<div id="container" class="main"></div>'
console.log('id', str11.match(r11)[0])

// 位置
// ^ 匹配开头
// $ 匹配结尾
// 当有多行匹配模式（即有修饰符m）时，是行的概念
let resultHello = 'hello'.replace(/^|$/g, '#')
console.log(resultHello)
let resultMultiLine = "I\nlove\njavascript".replace(/^|$/gm, '#');
console.log(resultMultiLine)

// \b 单词边界，就是\w与\W之间的位置，也包括\w与^,\w与$之间的位置
let resultb = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log('\\b 单词边界', resultb)
// \B 非单词边界
let resultB = "[JS] Lesson_01.mp4".replace(/\B/g, '#');
console.log('\\B 非单词边界', resultB)

// (?=p) p是一个子模式，即p前面的位置，或者说，该位置后面的字符要匹配p 
// 又称 正向先行断言
// (?!p)  (?=p)的反面意思 又称 负向先行断言
let resultp = 'hello'.replace(/(?=l)/g, '#')
let resultP = 'hello'.replace(/(?!l)/g, '#')
console.log('(?=p)(?!p)', resultp, resultP)

// (?=p) 理解：接下来的字符要与p匹配，但是不包括p匹配的那些字符

// 实践 
// 不匹配任何字符
let r12 = /.^/
console.log('.^', r12.test(''), r12.test('a'))

// 数字千分位
let resultMilli = "123456789".replace(/(?!^)(?=(\d{3})+$)/g, ',')
console.log('千分', resultMilli)
// 匹配 "12312312 1231231"
let resultMilli2 = '123123 1321312'.replace(/(?!\b)(?=(\d{3})+\b)/g, ',')
console.log('千分', resultMilli2)
let resultMilli3 = '123123 1321312'.replace(/\B(?=(\d{3})+\b)/g, ',')
console.log('千分', resultMilli3)

let strNum = '121312312.123213'
let rNum = /^\d+/g
let resultNumMilli = strNum.replace(/^\d+/g, (str) => {
  return str.replace(/\B(?=(\d{3})+\b)/g, ',')
})
console.log(resultNumMilli.match(rNum)[0])
console.log('千分位终极版', resultNumMilli)

// 密码验证
// 数字或字母 6位以上
let regPW1 = /^[0-9a-zA-Z]{6,}$/
console.log('pw1', regPW1.test('1232fese'))
// 必须包含数字、字母
let regPW2 = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[0-9a-zA-Z]{6,}$/
console.log('pw2', regPW2.test('1232fese'))
// (?=.*[0-9]) 标示后面的位置要匹配字符 .*[0-9]

// 括号作用
let r13 = /(\d{4})-(\d{2})-(\d{2})/
let str13 = '2019-08-26'
console.log('group', str13.match(r13))
r13.test(str13)
console.log('group', RegExp.$1, RegExp.$2, RegExp.$3)
let res13 = str13.replace(r13, '$2/$3/$1')
console.log('group replace', res13)

// 反向引用
// \1 标示要与前面的组1一致
let r14 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/
let str141 = '2018-09-02'
let str142 = '2018/09/04'
let str143 = '2018.09.04'
let str144 = '2018-09/14'
console.log(r14.test(str141), r14.test(str142), r14.test(str143), r14.test(str144))

// (?:p) 非捕获分组 不在API里引用，也不在正则里反向引用

// 第3章 实践
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '')
}

function trim2(str) {
  return str.replace(/^\s*(.*?)\s*$/g, '$1')
}

console.log('trim', trim('  ad  '), trim2('  ab   '))

// 首字母转大写
function titleize(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (c) => {
    return c.toUpperCase()
  })
}
console.log('titleize', titleize('my name is bbbb'))

// 驼峰化
function camelize(str) {
  return str.replace(/[-_\s]+(.)?/g, (match, c) => {
    return c ? c.toUpperCase() : ''
  })
}

console.log('camelize', camelize('moz-transform-feature'))
// console.log('camelize', camelize2('moz-transform'))

// 闭合标签
let r15 = /<([^>]+)>.*<\/\1>|<([^>]+)\/>/
let str151 = '<div>fasdfew</div>'
let str152 = '<br /'
console.log('close tag', r15.test(str151), r15.test(str152))

// 回溯
let r16 = /^(?:can|candy)$/
let str16 = 'candy'
console.log('回溯', str16.match(r16))

// search
let numReg = /\d/
console.log('search', 'abc123'.search(numReg))