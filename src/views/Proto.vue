<template>
  <div>
    <h4>原型模式(Prototype Pattern)</h4>
    <p>
      大家熟知的原型链，也是按照原型模式进行。原型模式是一种创建对象的方式。今天我们就以JS的原型链作为主要讲解，通过原型链的实例继承和对象的创建。
    </p>
    <p>
      在其它编程中使用原型模式的优势是使用更小的代价来创建对象，通过原型引用的方式而不是开辟新的空间。但JS是个例外，直接new就好了，因为JS创建对象的方式就是原型引用，所以对比其它语言创建大对象的性能，能高出不少。
    </p>
  </div>
</template>
<script>
export default {
  name: 'Proto',
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
  methods: {}
}
</script>
<style scoped lang="scss"></style>
