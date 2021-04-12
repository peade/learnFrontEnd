<template>
  <div>
    <h4>享元模式(Flyweight Pattern)</h4>
    <p>
      利用Map或其它方式减少重复创建相同类型的实例对象。
    </p>
    <p>在需要大量重复相同实例的时候，可以使用这种方式来降低极大的内存开销。</p>
  </div>
</template>
<script>
import { ShapeFactory } from '@/util/flyweight'
export default {
  name: 'FlyweightPattern',
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
    const colors = ['Red', 'Green', 'Blue', 'White', 'Black']
    for (let i = 0; i < 20; ++i) {
      const circle = ShapeFactory.getCircle(
        colors[Math.floor(Math.random() * colors.length)]
      )
      circle.setX(Math.floor(Math.random() * 100))
      circle.setY(Math.floor(Math.random() * 100))
      circle.setRadius(100)
      circle.draw()
    }
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
