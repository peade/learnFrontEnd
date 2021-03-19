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
    this.firstNext()
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
    },
    generateFlat() {
      const arr = [1, [[2, 3], 4], [5, 6]]
      const flat = function*(a) {
        const length = a.length
        for (let i = 0; i < length; i++) {
          const item = a[i]
          if (typeof item !== 'number') {
            yield* flat(item)
          } else {
            yield item
          }
        }
      }
      const res = flat(arr)
      console.log(res)
      for (let v of res) {
        console.log(v)
      }
    },
    firstNext() {
      function* dataConsumer() {
        console.log('Started')
        console.log(`1. ${yield}`)
        console.log(`2. ${yield}`)
        return 'result'
      }

      let genObj = dataConsumer()
      genObj.next()
      // Started
      genObj.next('a')
      // 1. a
      console.log(genObj.next('b'))
    },
    wrapNext() {
      function wrapper(generatorFunction) {
        return function(...args) {
          let generatorObject = generatorFunction(...args)
          generatorObject.next()
          return generatorObject
        }
      }

      const wrapped = wrapper(function*() {
        console.log(`First input: ${yield}`)
        return 'DONE'
      })

      wrapped().next('hello!')
    },
    fibonacci() {
      function* fibonacci() {
        let [prev, curr] = [0, 1]
        for (;;) {
          yield curr
          ;[prev, curr] = [curr, prev + curr]
        }
      }

      for (let n of fibonacci()) {
        if (n > 1000) break
        console.log(n)
      }
    },
    objEntry() {
      function* objectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj)

        for (let propKey of propKeys) {
          yield [propKey, obj[propKey]]
        }
      }

      let jane = { first: 'Jane', last: 'Doe' }

      for (let [key, value] of objectEntries(jane)) {
        console.log(`${key}: ${value}`)
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
