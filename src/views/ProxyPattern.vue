<template>
  <div>
    <h4>代理模式(Proxy Pattern)</h4>
    <p>用一个新的类来代理另一个类，这种模式一般用于方法的前置操作或拦截。</p>
    <p>能在不改变原有类的情况下，实现一些功能或者实现拦截和一些前置操作。</p>
  </div>
</template>
<script>
import { ProxyImage } from '@/util/proxy'
export default {
  name: 'ProxyPattern',
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
    const image = new ProxyImage('test_10mb.jpg')
    console.log('not use es6 Proxy:')
    // 图像将从磁盘加载
    image.display()
    console.log('')
    // 图像不需要从磁盘加载
    image.display()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
