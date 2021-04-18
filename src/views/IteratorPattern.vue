<template>
  <div>
    <h4>迭代器模式(Iterator Pattern)</h4>
    <p>
      主要是用于遍历数据，比如迭代链表。在数据过大时亦可像流一样，一点一点来接数据。
    </p>
    <p>
      通过迭代器的方式可以更方便的遍历有规律的数据，或者是通过迭代器来完成一些流式操作。
    </p>
  </div>
</template>
<script>
import { NameRepository, NameRepositoryEs6 } from '@/util/iterator'
export default {
  name: 'InteratorPattern',
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
    console.log(`es5 iterator: `)
    const nameRepository = new NameRepository()
    for (const iter = nameRepository.getIterator(); iter.hasNext(); ) {
      const name = iter.next()
      console.log(`Name: ` + name)
    }
    console.log('ES6 Iterator:')
    const namesRepositoryEs6 = new NameRepositoryEs6()
    for (const name of namesRepositoryEs6) {
      console.log('Name : ' + name)
    }
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
