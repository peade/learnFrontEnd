<template>
  <div>
    <h4>工厂模式</h4>
    <p>
      工厂模式是比较常用的设计模式之一，那么什么叫工厂模式呢？简单来说，就是你需要什么东西不直接使用new的方法生成实例，然后统一通过工厂进行生产加工再生成实例。
    </p>
    <van-button @click="test" type="primary">测试</van-button>
  </div>
</template>
<script>
import { ShapeFactory } from '@/util/factory'
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
      const factory = new ShapeFactory()
      factory.getShape('CIRCLE').draw()
    }
  }
}
</script>
<style scoped lang="scss"></style>
