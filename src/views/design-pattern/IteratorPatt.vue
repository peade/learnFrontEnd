<template>
  <div>
    <h4>迭代器</h4>
    <p>
      迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。
    </p>
  </div>
</template>
<script>
export default {
  name: 'IteratorPattern',
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
    each(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr[i])
      }
    },
    outIterator() {
      return function Iterator(obj) {
        var current = 0
        var next = function() {
          current += 1
        }
        var isDone = function() {
          return current >= obj.length
        }
        var getCurrItem = function() {
          return obj[current]
        }
        return {
          next: next,
          isDone: isDone,
          getCurrItem: getCurrItem
        }
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
