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
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
