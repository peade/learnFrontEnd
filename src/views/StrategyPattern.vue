<template>
  <div>
    <h4>策略模式（Strategy Pattern）</h4>
    <p>
      策略模式，我觉得是状态模式的一种升级或衍生版本，策略模式更倾向于运算或策略，而状态模式更倾向于状态。
    </p>
    <p>
      策略和策略之间实现解耦，和状态模式类似可以通过此来消除一些if…else语句。
    </p>
  </div>
</template>
<script>
import {
  OperationAdd,
  OperationSubstract,
  OperationMultiply,
  Context
} from '@/util/strategy'
export default {
  name: 'StrategyPattern',
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
    let context = new Context(new OperationAdd())
    console.log('10 + 5 = ' + context.executeStrategy(10, 5))
    context = new Context(new OperationSubstract())
    console.log('10 - 5 = ' + context.executeStrategy(10, 5))
    context = new Context(new OperationMultiply())
    console.log('10 * 5 = ' + context.executeStrategy(10, 5))
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
