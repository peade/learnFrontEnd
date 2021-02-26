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
  mounted() {},
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
        }
      }

      const stack = new Stack()
      stack.push(5)
      stack.push(8)
      return Stack
    }
  }
}
</script>
<style scoped lang="scss"></style>
