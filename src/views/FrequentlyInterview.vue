<template>
  <div>
    <van-row gutter="10">
      <van-col class="col" span="6" @click="flatArr">数组扁平化</van-col>
    </van-row>
  </div>
</template>
<script>
import {
  arrFlat,
  regFlat,
  regFlatImprove,
  reduceFlat
} from '@/FrequentlyInterview/flat-array'
export default {
  name: 'FrequentlyInterview',
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
  methods: {
    flatArr() {
      const arr = [1, [2, [3, [4, 5]]], 6]
      console.log('arrFlat', arrFlat(arr))
      console.log('regFlat', regFlat(arr))
      console.log('regFlatImprove', regFlatImprove(arr))
      console.log('reduceFlat', reduceFlat(arr))
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
  line-height: 2rem;
  font-size: 0.9rem;
}
</style>
