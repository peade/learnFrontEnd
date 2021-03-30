<template>
  <div>
    <h4>
      组合模式(Composite Pattern)
    </h4>
    <p>
      以结构化的方式，是单一对象具有树形结构，让单一对象更具有结构性。
    </p>
    <p>
      让相互关联的对象产生了结构性，无论是在关系修改或者是关系直观性上，都只需要关心当前下级的关系，那么这样能更好的降低关系和关系之间的复杂度，加强单对象关系结构的可维护性。
    </p>
  </div>
</template>
<script>
import { Employee } from '@/util/composite'
export default {
  name: 'CompositePattern',
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
    this.test()
  },
  destroyed() {},
  methods: {
    test() {
      const CEO = new Employee('John', 'CEO', 30000)
      const headSales = new Employee('Robert', 'Head Sales', 20000)
      const headMarketing = new Employee('Michel', 'Head Marketing', 20000)
      const clerk1 = new Employee('Laura', 'Marketing', 10000)
      const clerk2 = new Employee('Bob', 'Marketing', 10000)
      const salesExecutive1 = new Employee('Richard', 'Sales', 10000)
      const salesExecutive2 = new Employee('Rob', 'Sales', 10000)
      CEO.add(headSales)
      CEO.add(headMarketing)
      headSales.add(salesExecutive1)
      headSales.add(salesExecutive2)
      headMarketing.add(clerk1)
      headMarketing.add(clerk2)

      function printAllEmployee(employee) {
        for (const subEmployee of employee.getSubordinates()) {
          console.log(subEmployee.toString())
          if (subEmployee.getSubordinates().length > 0) {
            printAllEmployee(subEmployee)
          }
        }
      }
      console.log(CEO.toString())
      printAllEmployee(CEO)
    }
  }
}
</script>
<style scoped lang="scss"></style>
