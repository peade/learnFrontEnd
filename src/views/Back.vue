<template>
  <div>
    <div>后退测试</div>
    <div>
      <router-link :to="{ path: '/strategy' }">下一步</router-link>
    </div>
  </div>
</template>
<script>
import { DetectBack } from '@/util/detect-back'
export default {
  name: 'Back',
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
    DetectBack.addEvt(this.back)
  },
  destroyed() {
    DetectBack.removeEvt(this.back)
  },
  methods: {
    back() {
      this.$dialog({
        title: '返回么？'
      }).then(() => {
        history.go(-1)
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>
