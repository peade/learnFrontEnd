<template>
  <div class="list">
    <router-link v-for="r in routeList" :key="r.path" :to="{ path: r.path }">
      {{ r.name }}
    </router-link>
  </div>
</template>
<script>
import routers from '@/router/routes'
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
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.list {
  a {
    padding: 10px;
  }
}
</style>
