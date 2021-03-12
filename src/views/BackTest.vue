<template>
  <div></div>
</template>
<script>
import { BackDetect } from '@/util/back-detect'
export default {
  name: 'BackTest',
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
    BackDetect.addEvt(this.fn)
  },
  destroyed() {
    BackDetect.removeEvt(this.fn)
  },
  methods: {
    fn() {
      this.$dialog
        .confirm({
          title: '标题',
          message: '弹窗内容'
        })
        .then(() => {
          // on confirm
          history.go(-1)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>
<style scoped lang="scss"></style>
