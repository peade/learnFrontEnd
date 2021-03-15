<template>
  <div>
    <div v-for="item in list" :key="item">{{ item }}</div>
    <div v-for="item in arr" :key="JSON.stringify(item)">
      {{ item.a }}{{ item.c }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestVue',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      arr: [
        { a: 1, b: 2 },
        { a: 11, b: 22 }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      console.log('timeout')
      this.list[2] = 10
      this.list.length = 3
      this.arr[0].a = 34
      this.arr[0].c = 19
      this.arr.length = 1
    }, 3000)
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss">
div {
  text-align: center;
}
</style>
