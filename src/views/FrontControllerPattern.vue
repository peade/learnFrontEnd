<template>
  <div>
    <h4>前端控制器模式（Front Controller Pattern）</h4>
    <p>
      即为所有的请求提供一个统一处理的方法，像现在网关层就是一个前端控制器模式组件实例。
    </p>
    <p>能够提供统一处理接口请求的常用的方案。</p>
  </div>
</template>
<script>
import { FrontController } from '@/util/front-controller'
export default {
  name: 'FrontControllerPattern',
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
    const frontController = new FrontController()
    frontController.dispatchRequest('HOME')
    frontController.dispatchRequest('STUDENT')
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
