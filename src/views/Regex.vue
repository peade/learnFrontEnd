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
    }
  }
}
</script>
<style scoped lang="scss"></style>
