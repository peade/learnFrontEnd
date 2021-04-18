<template>
  <div>
    <h4>组合实体模式（Composite Entity Pattern）</h4>
    <p>
      即将两个不同的实体组合成一个对象实体使用，每个组合的实体都是有对应的策略。
    </p>
    <p>对外只需要关心组合实体后暴露的功能，而不需要关心组合之前的实体。</p>
  </div>
</template>
<script>
import { Client } from '@/util/composite-entity'
export default {
  name: 'CompositeEntityPattern',
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
    const client = new Client()
    client.setData('Test', 'Data')
    client.printData()
    client.setData('Second Test', 'Data1')
    client.printData()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
