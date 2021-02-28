<template>
  <div>
    <h4>策略模式</h4>
    <p>
      策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
    </p>
  </div>
</template>
<script>
export default {
  name: 'Stratege',
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
    this.strategyFn()
  },
  destroyed() {},
  methods: {
    strategyFn() {
      const Strategies = {
        S: function(salary) {
          return salary * 4
        },
        A: function(salary) {
          return salary * 3
        },
        B: function(salary) {
          return salary * 2
        }
      }
      const calculateBonus = function(level, salary) {
        return Strategies[level](salary)
      }
      console.log(calculateBonus('S', 20000))
      console.log(calculateBonus('A', 10000))
    }
  }
}
</script>
<style scoped lang="scss"></style>
