<template>
  <div>
    <h4>
      桥接模式(Bridge Pattern)
    </h4>
    <div>
      桥接模式的设计目的是不让下层的组件的变化，影响上层的调用。
    </div>
    <div>
      即使基础组件发生变化，也不影响上层的调用。例子中RedCircle和GreenCircle作为了基础组件，假设方法drawCircle进行了更名或调用方法发生变更，但是在抽象层Shape依旧是draw，只能修改Circle的draw内容来修改，但是对外依然能保持draw方法的调用。
    </div>
  </div>
</template>
<script>
import { RedCircle, GreenCircle, Circle } from '@/util/bridge'
export default {
  name: 'BridgePattern',
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
    const redCircle = new Circle(100, 100, 10, new RedCircle())
    const greenCircle = new Circle(100, 100, 10, new GreenCircle())
    redCircle.draw()
    greenCircle.draw()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
