<template>
  <div>
    <h4>
      过滤器模式(Filter Pattern)
    </h4>
    <div>
      通过多个单一的功能筛选构建出一个复杂的筛选功能。
    </div>
    <div>
      在需要做类的筛选的时候，通过每次单一功能的筛选，再做聚合能极大的降低筛选功能的复杂性。
    </div>
  </div>
</template>
<script>
import {
  Person,
  CriteriaMale,
  CriteriaFemale,
  CriteriaSingle,
  AndCriteria,
  OrCriteria
} from '@/util/filter'
export default {
  name: 'FilterPattern',
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
    const persons = []
    persons.push(new Person('Robert', 'Male', 'Single'))
    persons.push(new Person('John', 'Male', 'Married'))
    persons.push(new Person('Laura', 'Female', 'Married'))
    persons.push(new Person('Diana', 'Female', 'Single'))
    persons.push(new Person('Mike', 'Male', 'Single'))
    persons.push(new Person('Bobby', 'Male', 'Single'))
    const male = new CriteriaMale()
    const female = new CriteriaFemale()
    const single = new CriteriaSingle()
    const singleMale = new AndCriteria(single, male)
    const singleOrFemale = new OrCriteria(single, female)
    console.log('Males: ')
    this.printPersons(male.meetCriteria(persons))
    console.log('\nFemales: ')
    this.printPersons(female.meetCriteria(persons))
    console.log('\nSingle Males: ')
    this.printPersons(singleMale.meetCriteria(persons))
    console.log('\nSingle Or Females: ')
    this.printPersons(singleOrFemale.meetCriteria(persons))
  },
  destroyed() {},
  methods: {
    printPersons(persons) {
      for (const person of persons) {
        console.log(person)
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
