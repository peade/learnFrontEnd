/**
 * 姓名规则
 * 中文姓名	不得出现非汉字、字母、.或者非半角字符；不得出现包含“不详”、“未知”、“不知道”、()、#、“？”、数字、空格等特殊字符；字符长度不得超过60位。
	如果名字中不含有中文，则认定该名字为非中文名，则只能含有英文、空格、"-"、","和"/"；
	姓名字节长度小于4就认为有问题，汉字长度超过30认为有问题(因数据PERSON_NAME 是60长度，即2-30个汉字)
	姓名不能为'未知', '不详', '不祥', ' ', '不知道','null','NULL'；
  所有字符和字母转半角，去除首尾空格
  
英文姓名	不得出现非大写字母、半角或者只有一位字母；不得出现两个及以上空格，或者头尾为空格；不得出现数字、“？”、“#” 等特殊字符和标点符号；字符长度不得超过60位。

 */

import { RegExp } from 'core-js'

// 全角半角转换
export const HalfFullWidithCharactor = {
  // 全角转半角字符
  ToCDB(str) {
    let tmp = ''
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) == 12288) {
        tmp += String.fromCharCode(str.charCodeAt(i) - 12256)
        continue
      }
      if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
        tmp += String.fromCharCode(str.charCodeAt(i) - 65248)
      } else {
        tmp += String.fromCharCode(str.charCodeAt(i))
      }
    }
    return tmp
  },
  // 半角转全角
  ToDBC(txtstring) {
    let tmp = ''
    for (let i = 0; i < txtstring.length; i++) {
      if (txtstring.charCodeAt(i) == 32) {
        tmp = tmp + String.fromCharCode(12288)
      }
      if (txtstring.charCodeAt(i) < 127) {
        tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248)
      }
    }
    return tmp
  }
}
// 获取字符长度：汉子2个字符，字母1个字符
export function StrCharLen(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
      len += 2
    } else {
      len++
    }
  }
  return len
}

/**
 * 校验字符长度，汉子2个字符，英文1个字符
 * @param {string} str
 * @param {object} options
 * @param {number} options.min
 * @param {number} options.max
 */
export function CharLenValidate(str, options = { min: 0, max: 60 }) {
  const { min, max } = options
  if (typeof str !== 'string') {
    throw new Error('传入的不是字符串')
  } else {
    const len = StrCharLen(str)
    console.log(len, min, max)
    return len >= min && len <= max
  }
}
// 判断姓名类型，包含中文字符，则为中文，包含英文字符，则为英文
export function CheckNameType(str) {
  const reg = /\p{Unified_Ideograph}/u
  return reg.test(str) ? 'cn' : 'en'
}

/**
 * 中文姓名	不得出现非汉字、字母、.或者非半角字符；不得出现包含“不详”、“未知”、“不知道”、()、#、“？”、数字、空格等特殊字符；字符长度不得超过60位。
	姓名字节长度小于4就认为有问题，汉字长度超过30认为有问题(因数据PERSON_NAME 是60长度，即2-30个汉字)
	姓名不能为'未知', '不详', '不祥', ' ', '不知道','null','NULL'；
 * @param {string} str 
 */
export function CnNameValidate(
  str,
  options = {
    min: 2,
    max: 30,
    blockStrList: ['未知', '不详', '不祥', '不知道']
  }
) {
  const { min, max, blockStrList } = options
  const pattern = new RegExp(`^\\p{Unified_Ideograph}{${min},${max}}$`, 'u')
  let noBlockStr = true
  if (blockStrList && blockStrList instanceof Array) {
    const blockPattern = new RegExp(`${blockStrList.join('|')}`)
    noBlockStr = !blockPattern.test(str)
  }
  return pattern.test(str) && noBlockStr
}
// 如果名字中不含有中文，则认定该名字为非中文名，则只能含有英文、空格、"-"、","和"/"；
// 英文姓名	不得出现非大写字母、半角或者只有一位字母；不得出现两个及以上空格，或者头尾为空格；不得出现数字、“？”、“#” 等特殊字符和标点符号；字符长度不得超过60位。
/**
 * @param {string} str
 * @param {object} options
 * @params {number} options.min
 * @param {number} options.max
 */
export function EnNameValidate(str, options = { min: 2, max: 60 }) {
  const newStr = str.trim() // 前后去空
  const len = StrCharLen(newStr)

  const { min, max } = options
  console.log(len, min, max)
  const charRestrict = /^[a-zA-Z\s-,/]+$/
  // const specCharLenRestirct = /[\s-,\\]{2,}/ // 非英文字符不能连着出现
  // const specCharLenRestirct = /\s{2,}|[-,\\]{2,}/ // 非英文字符不能连着出现
  const specCharLenRestirct = /\s{2,}/ // 空格不能连着出现
  const startAZ = /^[a-zA-Z]/
  const endAZ = /[a-zA-Z]$/
  console.log({
    min: len >= min,
    max: len <= max,
    charRestrict: charRestrict.test(newStr),
    specCharLenRestirct: !specCharLenRestirct.test(newStr),
    startAZ: startAZ.test(newStr),
    endAZ: endAZ.test(newStr)
  })
  return (
    len >= min &&
    len <= max &&
    charRestrict.test(newStr) &&
    !specCharLenRestirct.test(newStr) &&
    startAZ.test(newStr) &&
    endAZ.test(newStr)
  )
}
