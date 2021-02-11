<template>
  <div>Iterator</div>
</template>
<script>
export default {
  name: 'Iterator',
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
    this.range()

    this.explicitlyCall()
  },
  destroyed() {},
  methods: {
    range() {
      let range = { from: 1, to: 5 }
      // for...of 调用首先会调用这个：
      range[Symbol.iterator] = function() {
        // ……它返回迭代器对象（iterator object）：
        // 2. 接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
        return {
          current: this.from,
          last: this.to,
          // 3. next() 在 for..of 的每一轮循环迭代中被调用
          next() {
            // 4. 它将会返回 {done:.., value :...} 格式的对象
            if (this.current <= this.last) {
              return { done: false, value: this.current++ }
            } else {
              return { done: true }
            }
          }
        }
      }
      // 现在可以调用
      for (let num of range) {
        console.log(num)
      }
    },
    explicitlyCall() {
      const str = 'hello'
      const iterator = str[Symbol.iterator]()
      const bo = true
      while (bo) {
        let result = iterator.next()
        if (result.done) {
          break
        }
        // 一个接一个地输出字符
        console.log(result.value)
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
