<template>
  <div>
    <van-button @click="pop">pop</van-button>
    <van-button @click="push">push</van-button>
    <van-button @click="shift" type="info">shift</van-button>
    <van-button @click="unshift" type="primary">unshift</van-button>

    <van-button @click="splice" type="info">splice</van-button>
    <van-button @click="slice" type="primary">slice</van-button>
    <van-button @click="concat" type="danger">concat</van-button>
    <van-button @click="forEach" type="info">forEach</van-button>
    <van-button @click="indexOfLastIndexOf" type="primary">
      indexOfLastIndexOf
    </van-button>
    <van-button @click="includes" type="danger">includes</van-button>
    <van-button @click="find" type="danger">find</van-button>
    <van-button @click="findIndex" type="info">findIndex</van-button>
    <van-button @click="filter" type="primary">filter</van-button>
    <van-button @click="map" type="primary">map</van-button>
    <van-button @click="sort" type="info">sort</van-button>
    <van-button @click="reverse" type="danger">reverse</van-button>
    <van-button @click="splitJoin" type="primary">splitJoin</van-button>
    <van-button @click="reduce" type="info">reduce</van-button>
    <van-button @click="isArray" type="info">isArray</van-button>
    <div style="margin-top:10px;">
      <van-button @click="getMax" type="danger">getMax</van-button>
      <van-button @click="camelize('list-style-image')" type="primary">
        camelize
      </van-button>
      <van-button @click="shuffle" type="primary">
        shuffle
      </van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArrayLearn',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      arr: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.generateArr()
    console.log(this.arr)
  },
  mounted() {},
  destroyed() {},
  methods: {
    generateArr() {
      for (let i = 0; i < 20; i++) {
        const num = Math.floor(20 - Math.random() * 40)
        this.arr.push(num)
      }
    },
    pop() {
      console.log(this.arr.pop())
    },
    push() {
      const num = Math.floor(20 - Math.random() * 40)

      console.log('push ', this.arr.push(num), this.arr[this.arr.length - 1])
    },
    shift() {
      console.log(this.arr.shift())
    },
    unshift() {
      const num = Math.floor(Math.random() * 100)
      console.log('unshift ', this.arr.unshift(num), this.arr[0])
    },
    getMaxSubSum(arr) {
      let maxSum = 0
      let partialSum = 0
      for (let item of arr) {
        partialSum += item
        maxSum = Math.max(maxSum, partialSum)
        if (partialSum < 0) {
          partialSum = 0
        }
      }
      return maxSum
    },
    getMax() {
      console.log('max', this.getMaxSubSum(this.arr))
    },
    splice() {
      // arr.splice(index[, deleteCount, elem1, ..., elemN])
      console.log('splice', this.arr.splice(1, 1, 5, 7), this.arr)
    },
    slice() {
      console.log(this.arr.slice(1, 5), this.arr)
    },
    concat() {
      console.log([].concat(this.arr, 100))
    },
    forEach() {
      this.arr.forEach((item, index, array) => {
        if (array) {
          console.log(item, index)
        }
      })
    },
    indexOfLastIndexOf() {
      const num = this.arr[5]
      console.log(this.arr.indexOf(num), this.arr.lastIndexOf(num))
    },
    includes() {
      console.log(this.arr.includes(10))
    },
    find() {
      const num = this.arr[5]
      const result = this.arr.find(function(item, index, array) {
        if (array) {
          return item === num
        }
      })
      console.log(result)
    },
    findIndex() {
      const num = this.arr[5]
      const result = this.arr.findIndex(function(item, index, array) {
        if (array) {
          return item === num
        }
      })
      console.log(result)
    },
    filter() {
      const res = this.arr.filter(function(item, index, array) {
        if (array) {
          return item > 10
        }
      })
      console.log(res)
    },
    map() {
      const res = this.arr.map(function(item, index, array) {
        return item + array[0]
      })
      console.log(res)
    },
    sort() {
      this.arr.sort((a, b) => {
        if (a > b) {
          return 1
        }
        if (a === b) {
          return 0
        }
        if (a < b) {
          return -1
        }
      })
      console.log(this.arr)
    },
    reverse() {
      console.log(this.arr.reverse(), this.arr)
    },
    splitJoin() {
      const names = 'Bilbo, Gandalf, Nazgul'
      const arr = names.split(', ')
      console.log(arr.join('、 '))
    },
    reduce() {
      // let value = arr.reduce(function(accumulator, item, index, array) {}, [
      //   initial
      // ])
      const res = this.arr.reduce((acc, item, index, arr) => {
        if (arr) {
          console.log(index)
        }
        return acc.concat(item)
      }, [])
      console.log(res)
    },
    isArray() {
      console.log(Array.isArray(this.arr))
    },
    camelize(str) {
      const res = str
        .split('-')
        .map((word, index) =>
          index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('')
      console.log(res)
      return res
    },
    shuffle() {
      for (let i = this.arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))

        ;[this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
      }
      console.log(this.arr)
    }
  }
}
</script>
<style scoped lang="scss"></style>
