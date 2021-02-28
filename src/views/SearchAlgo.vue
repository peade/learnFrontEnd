<template>
  <div>
    <div>
      <h4>顺序搜索</h4>
      <p>
        顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找的元素做比较。顺序搜索是最低效的一种搜索算法。
      </p>
    </div>
    <div>
      <h4>二分搜索算</h4>
      <div>
        这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤。
        <ul>
          <li>
            (1) 选择数组的中间值。
          </li>
          <li>
            (2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。
          </li>
          <li>
            (3) 如果待搜索值比选中值要小，则返回步骤 1
            并在选中值左边的子数组中寻找（较小）。
          </li>
          <li>
            (4) 如果待搜索值比选中值要大，则返回步骤 1
            并在选种值右边的子数组中寻找（较大）。
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h4>内插搜索</h4>
      <p>内插搜索是改良版的二分搜索</p>
      <div>
        这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤。
        <ul>
          <li>
            (1) 使用 position 公式选中一个值。
          </li>
          <li>
            (2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。
          </li>
          <li>
            (3) 如果待搜索值比选中值要小，则返回步骤 1
            并在选中值左边的子数组中寻找（较小）。
          </li>
          <li>
            (4) 如果待搜索值比选中值要大，则返回步骤 1
            并在选种值右边的子数组中寻找（较大）。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchAlgorithm',
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
<style scoped lang="scss"></style>
