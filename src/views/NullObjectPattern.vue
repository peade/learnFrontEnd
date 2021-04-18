<template>
  <div>
    <h4>空对象模式（Null Object Pattern）</h4>
    <p>
      当存在两个同类的对象时，可以用相同的空对象来代替Null或undefined来做一些检测。
    </p>
    <p>
      比如在使用某个类时，需要对这个类来做空判断，在不确定后续这个类的方法是否会被调用时，用一个相同类的空对象来返回，这样可以更加无缝对接空值判断。
    </p>
  </div>
</template>
<script>
import { CustomerFactory } from '@/util/null-object'
export default {
  name: 'NullObjectPattern',
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
    const customer1 = CustomerFactory.getCustomer('Rob')
    const customer2 = CustomerFactory.getCustomer('Bob')
    const customer3 = CustomerFactory.getCustomer('Julie')
    const customer4 = CustomerFactory.getCustomer('Laura')
    console.log('Customers')
    console.log(customer1.getName())
    console.log(customer2.getName())
    console.log(customer3.getName())
    console.log(customer4.getName())
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
