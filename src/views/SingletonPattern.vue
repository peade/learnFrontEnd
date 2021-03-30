<template>
  <div>
    <h4>单例模式(Singleton Pattern)</h4>
    <p>
      什么叫单例模式，简单来说就是一个实例只生产一次。
    </p>
  </div>
</template>
<script>
import { SingleObject } from '@/util/singleton'
export default {
  name: 'SingletonPattern',
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
    const instance = SingleObject.getInstance()
    instance.showMessage()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
