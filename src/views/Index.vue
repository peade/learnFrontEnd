<template>
  <div>
    <van-row gutter="10">
      <van-col class="col" span="6">span: 61</van-col>
      <van-col class="col" span="6">span: 6</van-col>
      <van-col class="col" span="6">span: 6</van-col>
      <van-col class="col" span="6">span: 6</van-col>
      <van-col class="col" span="6">span: 61</van-col>
      <van-col class="col" span="6">span: 6</van-col>
      <van-col class="col" span="6">span: 6</van-col>
      <van-col class="col" span="6">span: 6</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: 'Index',
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
  mounted() {},
  destroyed() {},
  methods: {}
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
