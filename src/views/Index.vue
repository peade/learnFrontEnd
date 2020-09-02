<template>
  <div class="list">
    <router-link v-for="r in routeList" :key="r.path" :to="{ path: r.path }">
      {{ r.name }}
    </router-link>
  </div>
</template>
<script>
import routers from '@/router/router-module'
export default {
  name: 'Index',
  filters: {},
  components: {},
  mixins: [],
  data() {
    return {
      routeList: routers
    }
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log(typeof this.toType)
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {
    toType(obj) {
      const class2type = {}
      const toString = class2type.toString

      if (obj == null) {
        return obj + ''
      }
      console.log(toString.call(obj), class2type[toString.call(obj)])

      // Support: Android <=2.3 only (functionish RegExp)
      return typeof obj === 'object' || typeof obj === 'function'
        ? class2type[toString.call(obj)] || 'object'
        : typeof obj
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  a {
    padding: 10px;
  }
}
</style>
