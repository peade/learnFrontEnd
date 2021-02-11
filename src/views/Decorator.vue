<template>
  <div>
    decorator
  </div>
</template>
<script>
export default {
  name: 'Decorator',
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
    this.decorate()
  },
  destroyed() {},
  methods: {
    cachingDecorator(func, hash) {
      let cache = new Map()
      return function() {
        const key = hash(arguments)
        if (cache.has(key)) {
          console.log('cached ...')
          return cache.get(key)
        }
        const result = func.call(this, ...arguments)
        cache.set(key, result)
        return result
      }
    },
    hash() {
      const arr = []
      return arr.join.call(arguments)
    },
    decorate() {
      const worker = {
        slow(min, max) {
          console.log(`Called with ${min}, ${max}`)
          return min + max
        }
      }
      worker.slow = this.cachingDecorator(worker.slow, this.hash)
      console.log(worker.slow(3, 5))
      console.log('again ' + worker.slow(3, 5))
    }
  }
}
</script>
<style scoped lang="scss"></style>
