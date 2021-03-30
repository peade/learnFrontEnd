<template>
  <div>
    <h4>装饰器模式(Decorator Pattern)</h4>
    <p>
      装饰器模式实现了不改变原有对象，在原有对象上实现功能的添加。这是一种对原有对象的一种包装。
    </p>
    <p>
      即使原有对象发生改变，装饰器是种非侵入式功能添加，对原有对象的影响也能降低到最小。
    </p>
  </div>
</template>
<script>
import { Circle, Rectangle, RedShapeDecorator } from '@/util/decorator'
export default {
  name: 'DecoratorPattern',
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
    const circle = new Circle()
    const redCircle = new RedShapeDecorator(new Circle())
    const redRectangle = new RedShapeDecorator(new Rectangle())
    console.log('Circle with normal border')
    circle.draw()
    console.log('\nCircle of red border')
    redCircle.draw()
    console.log('\nRectangle of red border')
    redRectangle.draw()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
