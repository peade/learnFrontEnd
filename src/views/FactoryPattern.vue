<template>
  <div>
    <div>
      <h4>工厂模式</h4>
      <p>
        工厂模式是比较常用的设计模式之一，那么什么叫工厂模式呢？简单来说，就是你需要什么东西不直接使用new的方法生成实例，然后统一通过工厂进行生产加工再生成实例。
      </p>
      <van-button @click="test" type="primary">测试</van-button>
      <p>
        那么使用工厂模式的好处也是显而易见的，比如实例的生产比较复杂，或者说生成实例后还需要额外加工，这个时候工厂给了我们一个统一的出入口，也方便了日后对这个实例的修改。比如你要修改工厂产出是一个单例的时候，就不需要在所有的类中修改，而只要在工厂出口修改即可达到目标。
      </p>
    </div>
  </div>
</template>
<script>
import { ShapeFactory, FactoryProducer } from '@/util/factory'

export default {
  name: 'FactoryPattern',
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
    test() {
      const shapeFactory = new ShapeFactory()
      const shape1 = shapeFactory.getShape('CIRCLE')
      shape1.draw()
      const shape2 = shapeFactory.getShape('RECTANGLE')
      shape2.draw()
      const shape3 = shapeFactory.getShape('SQUARE')
      shape3.draw()
      const shape4 = shapeFactory.getShape('Other')
      shape4.draw()
    },
    abstractFactory() {
      //通过抽象工厂拿形状工厂
      const shapeFactory = FactoryProducer.getFactory('SHAPE')
      // 通过工厂拿各种形状
      const shape1 = shapeFactory.getShape('CIRCLE')
      shape1.draw()
      const shape2 = shapeFactory.getShape('RECTANGEL')
      shape2.draw()
      const shape3 = shapeFactory.getShape('SQUARE')
      shape3.draw()
      //通过抽象工厂拿颜色工厂
      const colorFactory = FactoryProducer.getFactory('COLOR')
      // 通过工厂拿各种颜色
      const color1 = colorFactory.getColor('RED')
      color1.fill()
      const color2 = colorFactory.getColor('BLUE')
      color2.fill()
      const color3 = colorFactory.getColor('GREEN')
      color3.fill()
      /**
       * output：
       * I'm a circle
       * I'm a rectangle
       * I'm a square
       * fill red
       * fill blue
       * fill green
       */
    }
  }
}
</script>
<style scoped lang="scss"></style>
