<template>
  <div>正则</div>
</template>
<script>
import { LogFnName } from '@/util/index'
export default {
  name: 'Regex',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.logFn(this.unicode)
    this.logFn(this.anchor)
    this.logFn(this.multiLine)
    this.logFn(this.wordBorder)
    LogFnName(this.gather)()
    LogFnName(this.findDot)()
    LogFnName(this.greedLazy)()
    LogFnName(this.group)()
    LogFnName(this.matchAll)()
    LogFnName(this.backRefer)()
    LogFnName(this.selector)()
    LogFnName(this.lookBefore)()
    LogFnName(this.lookAfter)()
    LogFnName(this.milliFormat)('123123123123111')

    LogFnName(this.execY)()
    LogFnName(this.strMatch)()
    LogFnName(this.strSplit)()
    LogFnName(this.replace)()
  },
  destroyed() {},
  methods: {
    logFn(fn, ...args) {
      console.log(fn.name)
      fn(...args)
    },
    unicode: function() {
      const cnReg = /\p{sc=Han}/gu
      const currencyReg = /\p{Sc}\d/gu
      const hexReg = /\p{Hex_Digit}/gu
      const str = 'Abc 您好 ￥1111'
      console.log(cnReg.test(str), currencyReg.test(str), hexReg.test(str))
    },
    anchor() {
      console.log(/^\d+$/.test('12321312'))
    },
    multiLine() {
      const str = `1st place: Winnie
      2nd place: Piglet
      33rd place: Eeyore`
      console.log(str.match(/\d+/gm))
    },
    wordBorder() {
      console.log(
        'Breakfast at 09:00 in the room 123:456.'.match(/\b\d\d:\d\d\b/)
      )
    },
    gather() {
      const reg = /\d\d[-:]\d\d/g
      console.log('Breakfast at 09:00. Dinner at 21-30'.match(reg))
    },
    findDot() {
      console.log('Hello!... How goes?.....'.match(/\.{3,}/g))
    },
    greedLazy() {
      const comment = `... <!-- My -- comment test --> ..  <!----> ..`
      console.log(comment.match(/<!--[\s\S]*?-->/g))
    },
    group() {
      const str = '<span class="my">'
      const regexp = /<(([a-z]+)\s*([^>]*))>/
      const result = str.match(regexp)
      console.log(result[0]) // <span class="my">
      console.log(result[1]) // span class="my"
      console.log(result[2]) // span
      console.log(result[3]) // class="my"
    },
    matchAll() {
      const str = '<h1> <h2>'
      const reg = /<(.*?)>/gi
      let results = str.matchAll(reg)
      // results - is not an array, but an iterable object
      console.log(results) // [object RegExp String Iterator]
      console.log(results[0]) // undefined (*)
      results = Array.from(results)
      const arr = results.reduce((a, b) => {
        return a.concat(b[1])
      }, [])
      console.log(results, arr)
      console.log(str.match(reg))
    },
    // 反向引用
    backRefer() {
      // by key
      const str = `He said: "She's the one!".`
      const reg1 = /(['"])(.*?)\1/g
      console.log(str.match(reg1))
      // by name
      const reg2 = /(?<quote>['"])(.*?)\k<quote>/g
      console.log(str.match(reg2))
    },
    // 选择 |
    selector() {
      const reg = /Java|JavaScript|PHP|C|C\+\+/g
      const str = 'Java, JavaScript, PHP, C, C++'
      console.log(str.match(reg)) // Java,Java,PHP,C,C
    },
    // 前瞻断言，后面跟着或不跟
    lookAfter() {
      // 语法为：x(?=y)，它表示 “匹配 x, 仅在后面是 y 的情况””
      const str1 = '1 turkey costs 30€'
      console.log(str1.match(/\d+(?=€)/))
      // x(?!y)，意思是 “查找 x, 但是仅在不被 y 跟随的情况下匹配成功”
      console.log(str1.match(/\d+(?!€)/))
    },
    // 后瞻断言，前面是或不是
    lookBefore() {
      // 后瞻肯定断言：(?<=y)x, 匹配 x, 仅在前面是 y 的情况。
      // 后瞻否定断言：(?<!y)x, 匹配 x, 仅在前面不是 y 的情况。
      const str = '1 turkey costs $30'
      console.log(str.match(/(?<=\$)\d+/))
      console.log(str.match(/(?<!\$)\d+/))
    },
    milliFormat(numStr) {
      console.log(numStr.replace(/(?=(?!^)(\d{3})+$)/g, ','))
    },
    // 位置搜索
    execY() {
      const str = `let varName = "value"`
      const reg = /\w+/y
      reg.lastIndex = 3
      console.log(reg.exec(str))
      reg.lastIndex = 4
      console.log(reg.exec(str))
    },
    // 字符串方法
    strMatch() {
      const str = 'I love JavaScript'

      // str.match(regexp) 方法在字符串 str 中找到匹配 regexp 的字符。
      // 如果 regexp 不带有 g 标记，则它以数组的形式返回第一个匹配项，其中包含分组和属性 index（匹配项的位置）、input（输入字符串，等于 str）：
      const reg1 = /Java(Scri(pt))/
      const res1 = str.match(reg1)
      // 如果 regexp 带有 g 标记，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息
      const reg2 = /Java(Script)/g
      const res2 = str.match(reg2)
      // 如果没有匹配项，则无论是否带有标记 g ，都将返回 null
      console.log(res1)
      console.log(res2)
    },
    strMatchAll() {
      /**
       * 它返回包含匹配项的可迭代对象，而不是数组。我们可以用 Array.from 从中得到一个常规数组。
       * 每个匹配项均以包含分组的数组形式返回（返回格式与不带 g 标记的 str.match 相同）。
       * 如果没有结果，则返回的不是 null，而是一个空的可迭代对象。
       */
      const str = '<h1>Hello, world!</h1>'
      const regexp = /<(.*?)>/g
      const matchAll = str.matchAll(regexp)
      console.log(matchAll) // [object RegExp String Iterator]，不是数组，而是一个可迭代对象
      const allArr = Array.from(matchAll) // 现在返回的是数组
      let firstMatch = allArr[0]
      console.log(firstMatch[0]) // <h1>
      console.log(firstMatch[1]) // h1
      console.log(firstMatch.index) // 0
      console.log(firstMatch.input) // <h1>Hello, world!</h1>
    },
    strSplit() {
      console.log('12-34-56'.split('-'))
    },
    replace() {
      const str = '123abc456'
      const regex = /(\d+)/g

      function replacer(g0, g1, offset, source) {
        console.log({ g0, g1, offset, source })
        return [g1].join(' - ')
      }

      console.log(str.replaceAll(regex, replacer))
      console.log(str.replace(regex, replacer))
    }
  }
}
</script>
<style scoped lang="scss"></style>
