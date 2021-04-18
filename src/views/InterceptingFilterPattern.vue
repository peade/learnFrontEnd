<template>
  <div>
    <h4>拦截过滤器模式（Intercepting Filter Pattern）</h4>
    <p>顾名思义在执行目标操作之前的一些检查和拦截。</p>
    <p>
      首先要完成一个拦截器只需要关心需要实现的接口，只需要关心和其它拦截器的先后关系，这也算是对拦截器和拦截器之间的解耦。其次在执行目标函数的拦截器也不需要关心目标操作的结果和关系。
    </p>
  </div>
</template>
<script>
import {
  AuthenticationFilter,
  DebugFilter,
  Target,
  FilterManager,
  Client
} from '@/util/intercepting-filter'
export default {
  name: 'InterceptingFilterPattern',
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
    const filterManager = new FilterManager(new Target())
    filterManager.setFilter(new AuthenticationFilter())
    filterManager.setFilter(new DebugFilter())
    const client = new Client()
    client.setFilterManager(filterManager)
    client.sendRequest('HOME')
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
