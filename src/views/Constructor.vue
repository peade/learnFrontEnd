<template>
  <div>
    <h4>建造者模式</h4>
    <p>
      让简单的对象通过组合的方式构造成多种复杂对象。
    </p>
  </div>
</template>
<script>
import { MealBuilder } from '@/util/constructor'
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
    const mealBuilder = new MealBuilder()
    const vegMeal = mealBuilder.prepareVegMeal()
    console.log('Veg Meal')
    vegMeal.showItems()
    console.log('Total Cost: ' + vegMeal.getCost())
    const nonVegMeal = mealBuilder.prepareNonVegMeal()
    console.log('\nNon-Veg Meal')
    nonVegMeal.showItems()
    console.log('Total Cost: ' + nonVegMeal.getCost())
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
