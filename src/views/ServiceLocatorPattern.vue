<template>
  <div>
    <h4>服务定位器模式（Service Locator Pattern）</h4>
    <p>
      即原来要通过JNDI查询定位服务成本很高，所以通过一系列手段将服务缓存起来，让服务更快返回，这也是缓存服务的一种最佳实践。
    </p>
    <p>
      缓存服务和数据的最佳实践
    </p>
  </div>
</template>
<script>
import { ServiceLocator } from '@/util/service-locator'
export default {
  name: 'ServiceLocatorPattern',
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
    let service = ServiceLocator.getService('Service1')
    service.execute()
    service = ServiceLocator.getService('Service2')
    service.execute()
    service = ServiceLocator.getService('Service1')
    service.execute()
    service = ServiceLocator.getService('Service2')
    service.execute()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
