<template>
  <div></div>
</template>
<script>
export default {
  name: 'Queue',
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
    generateQueue() {
      class Queue {
        constructor() {
          this.count = 0
          this.lowestCount = 0
          this.items = {}
        }
        enqueue(element) {
          this.items[this.count] = element
          this.count++
        }
        removeFront() {
          if (this.isEmpty()) {
            return undefined
          }
          const result = this.items[this.lowestCount]
          delete this.items[this.lowestCount]
          this.lowestCount++
          return result
        }
        removeBack() {
          if (this.isEmpty()) {
            return undefined
          }
          const result = this.items(this.count - 1)
          delete this.items[this.count - 1]
          this.count--
          return result
        }
        isEmpty() {
          return this.count - this.lowestCount === 0
        }
        peek() {
          if (this.isEmpty()) {
            return undefined
          }
          return this.items[this.lowestCount]
        }
        size() {
          return this.count - this.lowestCount
        }
        clear() {
          this.items = {}
          this.count = 0
          this.lowestCount = 0
        }
        toString() {
          if (this.isEmpty()) {
            return ''
          }
          let objString = `${this.items[this.lowestCount]}`
          for (let i = this.lowestCount; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
          }
          return objString
        }
      }
      return Queue
    },
    // 双端队列
    deque() {
      class Deque {
        constructor() {
          this.count = 0
          this.lowestCount = 0
          this.items = {}
        }
        isEmpty() {
          return this.count - this.lowestCount === 0
        }
        addBack(element) {
          this.items[this.count] = element
          this.count++
        }
        addFront(element) {
          if (this.isEmpty()) {
            this.addBack(element)
          } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
          } else {
            for (let i = this.count; i > 0; i--) {
              this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
          }
        }
        peek() {
          if (this.isEmpty()) {
            return undefined
          }
          return this.items[this.lowestCount]
        }
        size() {
          return this.count - this.lowestCount
        }
        clear() {
          this.items = {}
          this.count = 0
          this.lowestCount = 0
        }
        toString() {
          if (this.isEmpty()) {
            return ''
          }
          let objString = `${this.items[this.lowestCount]}`
          for (let i = this.lowestCount; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
          }
          return objString
        }
      }
      return Deque
    },
    // 使用双端队列判断回文
    palindromeChecker(aString) {
      if (
        aString === undefined ||
        aString === null ||
        (aString !== null && aString.length === 0)
      ) {
        return false
      }
      const Deque = this.deque()
      const deque = new Deque()
      const lowerString = aString
        .toLocalLowerCase()
        .split(' ')
        .join('')
      let isEqual = true
      let firstChar, lastChar
      for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
      }
      while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
          return false
        }
      }
      return isEqual
    }
  }
}
</script>
<style scoped lang="scss"></style>
