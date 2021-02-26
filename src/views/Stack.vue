<template>
  <div>栈</div>
</template>
<script>
export default {
  name: 'Stack',
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
    console.log(this.decimalToBinary(100))
  },
  destroyed() {},
  methods: {
    stackClass() {
      class Stack {
        constructor() {
          this.count = 0
          this.items = {}
        }
        push(element) {
          this.items[this.count] = element
          this.count++
        }
        size() {
          return this.count
        }
        isEmpty() {
          return this.count === 0
        }
        pop() {
          if (this.isEmpty()) {
            return undefined
          }
          this.count--
          const result = this.items[this.count]
          delete this.items[this.count]
          return result
        }
        peek() {
          if (this.isEmpty()) {
            return undefined
          }
          return this.items[this.count - 1]
        }
        clear() {
          this.items = {}
          this.count = 0
          // while (!this.isEmpty()) {
          //   this.pop()
          // }
        }
        toString() {
          if (this.isEmpty()) {
            return ''
          }
          let objString = `${this.items[0]}`
          for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
          }
          return objString
        }
      }

      const stack = new Stack()
      stack.push(5)
      stack.push(8)
      return Stack
    },
    decimalToBinary(decNumber) {
      const Stack = this.stackClass()
      const remStack = new Stack()
      let number = decNumber
      let rem
      let binaryString = ''

      while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
      }
      while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
      }
      return binaryString
    }
  }
}
</script>
<style scoped lang="scss"></style>
