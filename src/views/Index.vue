<template>
  <div>
    <van-row gutter="10">
      <van-col
        class="col"
        span="6"
        v-for="item in routers"
        :key="item.name"
        @click="goPage(item)"
      >
        {{ item.meta.title }}
      </van-col>
    </van-row>
  </div>
</template>
<script>
import routers from '@/router/routers'
export default {
  name: 'Index',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      routers
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    goPage(item) {
      this.$router.push({ path: item.path })
    }
  }
}
</script>
<style scoped lang="scss">
.col {
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  background-color: #39a9ed;
  background-clip: content-box;
  line-height: 2;
  font-size: 1rem;
}
</style>
