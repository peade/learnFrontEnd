<template>
  <div>promise 练习<button @click="triggerPromise">触发</button></div>
</template>
<script>
import { PeaPromise } from '@/utils/pea-promise.js'
export default {
  name: 'PeaPromise',
  filters: {},
  components: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    triggerPromise() {
      PeaPromise.all([
        new PeaPromise(resolve => {
          setTimeout(() => {
            console.log('resolve')
            resolve()
          }, 1000)
        })
      ]).then(() => {
        console.log(2222)
      })
    }
  }
}
</script>
<style scoped></style>
