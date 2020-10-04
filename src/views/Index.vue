<template>
  <div class="container">
    <router-link
      v-for="route in routeList"
      :key="route.name"
      :to="{ path: route.path }"
      >{{ route.name }}</router-link
    >
  </div>
</template>
<script>
  import { routesConfig } from '@/router'
  export default {
    name: 'Index',
    filters: {},
    components: {},
    mixins: [],
    data() {
      return {
        routeList: routesConfig
      }
    },
    computed: {},
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
  .container {
    text-align: center;
  }
  .list {
    a {
      padding: 10px;
    }
  }
</style>
