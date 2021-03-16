<template>
  <div></div>
</template>
<script>
import { DeepClone } from '@/util/deep-clone'
export default {
  name: 'DeepClone',
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
    this.testDC()
  },
  destroyed() {},
  methods: {
    testDC() {
      const dc = new DeepClone()
      const a = {
        a: 1,
        b: true,
        c: undefined,
        d: null,
        e: function(a, b) {
          return a + b
        },
        f: /\W+/gi,
        time: new Date()
      }
      const b = dc.clone(a)
      console.log(a, b)
      console.log(a === b)
    }
  }
}
</script>
<style scoped lang="scss"></style>
