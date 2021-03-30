<template>
  <div>
    <h4>外观模式(Facade Pattern)</h4>
    <p>对外提供单一接口，来隐藏系统的复杂性</p>
    <p>
      隐藏内部的复杂性，这样能减少一些对内部修改的可能，同时对外暴露单一功能接口，也有利于降低复杂性。
    </p>
  </div>
</template>
<script>
import { ShapeMaker } from '@/util/facade'
export default {
  name: 'FacadePattern',
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
    const shapeMaker = new ShapeMaker()
    shapeMaker.drawCircle()
    shapeMaker.drawRectangle()
    shapeMaker.drawSquare()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
