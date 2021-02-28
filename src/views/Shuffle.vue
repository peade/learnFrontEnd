<template>
  <div>随机算法</div>
</template>
<script>
export default {
  name: 'Shuffle',
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
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(this.shuffle(arr))
  },
  destroyed() {},
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        ;[array[randomIndex], array[i]] = [array[i], array[randomIndex]]
      }
      return array
    }
  }
}
</script>
<style scoped lang="scss"></style>
