<template>
  <div>
    数据结构与算法
    <div id="test"></div>
  </div>
</template>
<script>
export default {
  name: 'DsAlgo',
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
    // 递归
    recursion() {
      function getEleById(node, id) {
        if (!node) {
          return null
        }
        if (node.id === id) {
          return node
        }
        for (let i = 0; i < node.childNodes.length; i++) {
          const found = getEleById(node.childNodes[i], id)
          return found
        }
        return null
      }
      getEleById(document, 'test')
    },
    // 重复值处理 duplicate values
    // 双循环
    dualCicle() {
      let lastHouses = []
      function filterHouse(houses) {
        if (lastHouses.length === 0) {
          lastHouses = houses
          return {
            remainsHouses: [],
            newHouses: houses
          }
        }
        const remainsHouses = []
        const newHouses = []

        for (let i = 0; i < houses.length; i++) {
          let isNewHouse = true
          for (let j = 0; j < lastHouses.length; j++) {
            if (houses[i].id === lastHouses[j].id) {
              isNewHouse = false
              remainsHouses.push(lastHouses[j])
              break
            }
          }
          if (isNewHouse) {
            newHouses.push(houses[i])
          }
        }
        lastHouses = remainsHouses.concat(newHouses)
        return {
          remainsHouses: remainsHouses,
          newHouses: newHouses
        }
      }
      filterHouse([])
    },
    // 使用Set
    useSet() {
      let lastHouses = new Set()
      function filterHouse(houses) {
        const remainsHouses = []
        const newHouses = []
        for (let i = houses.length - 1; i >= 0; i--) {
          if (lastHouses.has(houses[i].id)) {
            remainsHouses.push(houses[i])
          } else {
            newHouses.push(houses[i])
          }
        }
        for (let i = 0; i < newHouses.length; i++) {
          lastHouses.add(newHouses[i].id)
        }
        return {
          remainsHouses,
          newHouses
        }
      }
      filterHouse([])

      function filterHouse2(houses) {
        const remainsHouses = []
        const newHouses = []
        houses.map(house =>
          lastHouses.has(house.id)
            ? remainsHouses.push(house)
            : newHouses.push(house)
        )
        newHouses.map(house => lastHouses.add(house.id))
        return {
          remainsHouses,
          newHouses
        }
      }
      filterHouse2([])
    },
    // 使用Map
    useMap() {
      const lastHouses = new Map()
      function filterHouse(houses) {
        const remainsHouses = []
        const newHouses = []

        houses.map(house =>
          lastHouses.has(house.id)
            ? remainsHouses.push(house)
            : newHouses.push(house)
        )
        newHouses.map(house => lastHouses.set(house.id, house))
        return { remainsHouses, newHouses }
      }
      filterHouse([])
    },
    // 数组去重
    removeDuplicateBySetArray(arr) {
      return Array.from(new Set(arr))
    },
    removeDuplicateBySplice(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] === arr[i]) {
            arr.splice(j--, 1)
          }
        }
      }
      return arr
    },
    // 只使用array
    uniqueArray(arr) {
      const retArray = []
      for (let i = 0; i < arr.length; i++) {
        if (retArray.indexOf(arr[i]) < 0) {
          retArray.push(arr[i])
        }
      }
      return retArray
    }
  }
}
</script>
<style scoped lang="scss"></style>
