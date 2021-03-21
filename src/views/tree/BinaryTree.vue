<template>
  <div>
    <h4>二叉树</h4>
    <div>
      <button @click="addNode">添加节点</button>
      <button @click="orderTraverse">中序遍历</button>
      <button @click="preOrder">先序遍历</button>
      <button @click="getMin">最小</button>
      <button @click="getMax">最大</button>
      <button @click="search">查找</button>
    </div>
  </div>
</template>
<script>
import { BinarySearchTree } from './binary-tree-data'
export default {
  name: 'BinaryTree',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      tree: new BinarySearchTree(),
      target: null
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    addNode() {
      const num = Math.round(Math.random() * 1000)
      this.target = num
      this.tree.insert(num)
      console.log(this.tree)
    },
    orderTraverse() {
      this.tree.inOrderTraverse(val => {
        console.log(val)
      })
    },
    preOrder() {
      this.tree.preOrderTraverse(val => {
        console.log(val)
      })
    },
    getMin() {
      console.log(this.tree.min().key)
    },
    getMax() {
      console.log(this.tree.max().key)
    },
    search() {
      console.log(this.tree.search(this.target))
      console.log(this.tree.search(100))
    }
  }
}
</script>
<style scoped lang="scss"></style>
