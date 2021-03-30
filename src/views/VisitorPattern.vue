<template>
  <div>
    <h4>访问者模式（Visitor Pattern）</h4>
    <p>即根据访问者不同，所展示的行为也不同。</p>
    <p>
      如上类似设备这个东西是一个相对稳定的结构，而访问者要实现的功能又是非常不确定的，那么针对不同访问者，都可以对相同的设备进行不同的输出。其次只需要暴露特定接口，而相对稳定的设备不需要考虑接口中实现的内容。
    </p>
  </div>
</template>
<script>
import { Computer, ComputerPartDisplayVisitor } from '@/util/visitor'
export default {
  name: 'VisitorPattern',
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
    const computer = new Computer()
    computer.accept(new ComputerPartDisplayVisitor())
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
