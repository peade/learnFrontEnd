<template>
  <div>
    柯里化Currying<br />
    柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的
    f(a)(b)(c)。
  </div>
</template>
<script>
export default {
  name: 'Currying',
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
    console.log(this.fnLen.length)
    this.testCurried()
  },
  destroyed() {},
  methods: {
    curry(fn) {
      return function curried(...args) {
        if (args.length >= fn.length) {
          return fn.apply(this, args)
        } else {
          return function(...args2) {
            return curried.apply(this, args.concat(args2))
          }
        }
      }
    },
    testCurried() {
      function sum(a, b, c) {
        return a + b + c
      }
      const curriedSum = this.curry(sum)
      console.log(curriedSum(1, 2, 3))
      console.log(curriedSum(1)(2, 3))
      console.log(curriedSum(1)(2)(3))
    },
    fnLen(a, b, c) {
      console.log(a, b, c)
    }
  }
}
</script>
<style scoped lang="scss"></style>
