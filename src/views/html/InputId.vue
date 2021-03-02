<template>
  <div>
    <input
      type="text"
      id="inputTest"
      name="testInput"
      value="input test value"
    />
  </div>
</template>
<script>
export default {
  name: 'InputId',
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
    setTimeout(() => {
      console.dir(window.inputTest)
      console.log(window.inputTest.value)
    }, 100)
    this.testRegStr()
  },
  destroyed() {},
  methods: {
    testRegStr() {
      const a = new RegExp('abc', 'i')
      console.log(a)
      const arr = a
        .toString()
        .replace('/', '')
        .split('/')

      const b = new RegExp(arr[0], arr[1] || '')
      console.log(b)
      console.log(a === b)
    }
  }
}
</script>
<style scoped lang="scss"></style>
