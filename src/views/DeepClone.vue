<template>
  <div>
    deepClone
  </div>
</template>
<script>
import { DeepClone } from '@/utils/tools'
export default {
  name: 'DeepClone',
  filters: {},
  components: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    const a = { v: 1, s: { m: 2 } }
    const b = DeepClone(a)
    console.log({ a, b })
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped></style>
