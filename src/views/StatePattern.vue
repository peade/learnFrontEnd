<template>
  <div>
    <h4>状态模式（State Pattern）</h4>
    <p>即类的行为根据状态的改变而改变。</p>
    <p>适合一些需要根据状态而改变的类，或通过此来消除一些if…else语句。</p>
  </div>
</template>
<script>
import { Context, StartState, StopState } from '@/util/state'
export default {
  name: 'StatePattern',
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
    const context = new Context()
    const startState = new StartState()
    startState.doAction(context)
    console.log(context.getState())
    const stopState = new StopState()
    stopState.doAction(context)
    console.log(context.getState())
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
