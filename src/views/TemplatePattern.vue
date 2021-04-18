<template>
  <div>
    <h4>模板模式（Template Pattern）</h4>
    <p>
      当一个类型公开了它的执行方式，其它类型只需按需实现的的时候可以使用这个模式。
    </p>
    <p>
      只需要关注自己功能的实现，而不需要着眼整个流程。
    </p>
  </div>
</template>
<script>
import { Cricket, Football } from '@/util/template'
export default {
  name: 'TemplatePattern',
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
    let game = new Cricket()
    game.play()
    console.log('')
    game = new Football()
    game.play()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
