<template>
  <div>IE Test</div>
</template>
<script>
  import { TestClass } from './ie-test'
  export default {
    name: 'IETest',
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
        try {
          const test = new TestClass()
          test.test()
        } catch (e) {
          alert(e)
          console.log(e)
        }
      }
    }
  }
</script>
<style scoped lang="scss"></style>
