<template>
  <div>
    <h4>建造者模式</h4>
    <p>
      让简单的对象通过组合的方式构造成多种复杂对象。
    </p>
  </div>
</template>
<script>
import { CarBuilder, Director } from '@/util/constructor'
export default {
  name: 'ConstructorPattern',
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
    const builder = new CarBuilder()
    const director = new Director()
    director.action(builder)
    const Car = builder.getCar()
    console.log(Car)
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
