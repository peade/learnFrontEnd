<template>
  <div>
    <van-row gutter="10" type="flex">
      <van-col class="col" span="6" @click="flatArr">数组扁平化</van-col>
      <van-col class="col" span="6" @click="uniqueArr">数组去重</van-col>
      <van-col class="col" span="6" @click="toArray">转数组</van-col>
      <van-col class="col" span="6" @click="utils">工具性</van-col>
      <van-col class="col" span="6" @click="utils">工具性</van-col>
    </van-row>
    <code lang="javascript">{{ codeText }}</code>
  </div>
</template>
<script>
import {
  arrFlat,
  regFlat,
  regFlatImprove,
  reduceFlat,
  recursionFlat
} from '@/FrequentlyInterview/flat-array'
import {
  uniqueBySet,
  uniqueByForSplice,
  uniqueByIndexOf,
  uniqueByIncludes,
  uniqueByFilter,
  uniqueByMap
} from '@/FrequentlyInterview/unique-array'
import {
  arrayFrom,
  sliceCall,
  extendGrammar,
  arrConcat
} from '@/FrequentlyInterview/to-array'
import { protoInherit } from '@/FrequentlyInterview/utils'
export default {
  name: 'FrequentlyInterview',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      codeText: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    flatArr() {
      const arr = [1, [2, [3, [4, 5]]], 6]

      arrFlat(arr)
      regFlat(arr)
      regFlatImprove(arr)
      console.log('reduceFlat', reduceFlat(arr))
      console.log('recursionFlat', recursionFlat(arr))
    },
    uniqueArr() {
      const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
      uniqueBySet(arr)
      uniqueByForSplice(arr)
      uniqueByIndexOf(arr)
      uniqueByIncludes(arr)
      uniqueByFilter(arr)
      uniqueByMap(arr)
    },
    toArray() {
      arrayFrom()
      sliceCall()
      extendGrammar()
      arrConcat()
    },
    utils() {
      protoInherit()
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
