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
    mounted() {},
    destroyed() {},
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .container {
    text-align: center;
    a {
      padding: 10px;
    }
  }
</style>
