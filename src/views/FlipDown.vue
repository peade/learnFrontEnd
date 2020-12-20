<template>
  <div>
    <demo-one />
    <demo-two />
  </div>
</template>
<script>
import DemoOne from './FlipDownComp/DemoOne.vue'
import DemoTwo from './FlipDownComp/DemoTwo.vue'
export default {
  name: 'FlipDown',
  filters: {},
  components: { DemoOne, DemoTwo },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
