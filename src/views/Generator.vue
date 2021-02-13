<template>
  <div>Generator</div>
</template>
<script>
export default {
  name: 'Generator',
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
    this.generateThrow()
  },
  destroyed() {},
  methods: {
    iterator() {
      const range = {
        from: 1,
        to: 5,
        // [Symbol.iterator]: function*()的简写形式
        *[Symbol.iterator]() {
          for (let value = this.from; value <= this.to; value++) {
            yield value
          }
        }
      }
      // generator 方法正是 for..of 所期望的：
      // 它具有 .next() 方法
      // 它以 {value: ..., done: true/false} 的形式返回值
      console.log(...range)
    },
    generateThrow() {
      function* pseudoRandom() {
        while (true) {
          const num = parseInt(Math.random() * 100)
          if (num >= 50) {
            yield num
          } else {
            throw new Error('数字小于50')
          }
        }
      }
      const generator = pseudoRandom()
      const bo = true
      while (bo) {
        try {
          const val = generator.next()
          console.log(val)
        } catch (e) {
          console.log(e)
          break
        }
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
