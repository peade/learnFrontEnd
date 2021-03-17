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
      let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi)
      // results - is not an array, but an iterable object
      console.log(results) // [object RegExp String Iterator]
      console.log(results[0]) // undefined (*)
      results = Array.from(results)
      const arr = results.reduce((a, b) => {
        return a.concat(b[1])
      }, [])
      console.log(results, arr)
    }
  }
}
</script>
<style scoped lang="scss"></style>
