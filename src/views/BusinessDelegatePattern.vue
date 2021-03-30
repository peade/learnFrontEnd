<template>
  <div>
    <h4>业务代表模式（Business Delegate Pattern）</h4>
    <p>
      业务代码模式其实也是一种分层模型，分为业务服务层，服务查询层，业务代表层，客户端层。
    </p>
    <p>
      统一了业务出口，客户端不需要关心底层的模型，只需要关系业务代表暴露的模型。
    </p>
  </div>
</template>
<script>
import { BusinessDelegate, Client } from '@/util/business-delegate'
export default {
  name: 'BusinessDelegatePattern',
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
    const businessDelegate = new BusinessDelegate()
    businessDelegate.setServiceType('EJB')
    const client = new Client(businessDelegate)
    client.doTask()
    businessDelegate.setServiceType('JMS')
    client.doTask()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
