<template>
  <div>
    <binary-tree ref="binary" />
  </div>
</template>
<script>
import BinaryTree from './BinaryTree.vue'
export default {
  name: 'Tree',
  filters: {},
  components: { BinaryTree },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.$refs.binary)
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
