<template>
  <div>
    <p>排序算法</p>
    <div>{{ testFn(a) }}</div>
    <div class="a"></div>
    <div></div>
    <div>
      <div class="b"></div>
    </div>
  </div>
</template>
<script>
import {
  createNonSortedArray,
  bubbleSort,
  modifiedBubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  countingSort,
  bucketSort
} from './sort'
export default {
  name: 'DataSort',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      a: 11
    }
  },
  computed: {},
  watch: {},
  created() {
    setTimeout(() => {
      this.a = 22
    }, 5000)
  },
  mounted() {
    this.testBubbleSort()
    this.testMBubbleSort()
    this.testSelectionSort()
    this.testInsertionSort()
    this.testMergeSort()
    this.testQuickSort()
    this.testCountingSort()
    this.testBucketSort()
    this.testArrSort()
  },
  destroyed() {},
  methods: {
    testFn(a) {
      return a + 'b'
    },
    testBubbleSort() {
      console.log('bubble sort')
      const array = createNonSortedArray(10)
      console.log(bubbleSort(array))
    },
    testMBubbleSort() {
      console.log('modified bubble sort')
      const array = createNonSortedArray(10)
      console.log(modifiedBubbleSort(array))
    },
    testSelectionSort() {
      console.log('selection  sort')
      const array = createNonSortedArray(10)
      console.log(selectionSort(array))
    },
    testInsertionSort() {
      console.log('insertion sort')
      const array = createNonSortedArray(10)
      console.log(insertionSort(array))
    },
    testMergeSort() {
      console.log('merge sort')
      const array = createNonSortedArray(10)
      console.log(mergeSort(array))
    },
    testQuickSort() {
      console.log('quick sort')
      const array = createNonSortedArray(10)
      console.log(quickSort(array))
    },
    testCountingSort() {
      console.log('counting sort')
      const array = createNonSortedArray(10)
      console.log(countingSort(array))
    },
    testBucketSort() {
      console.log('bucket sort')
      const array = createNonSortedArray(10)
      console.log(bucketSort(array))
    },
    testArrSort() {
      const array = createNonSortedArray(10)
      console.log('array sort')
      console.log(array)
      array.sort((a, b) => {
        return a - b
      })
      console.log(array)
    }
  }
}
</script>
<style scoped lang="scss">
.a {
  width: 100%;
  height: 30px;
  background: #f4f4f4;
  margin: 30px 0;
}
.a::after {
  content: '';
  width: 100%;
}
.b {
  margin: 20px 0;
  width: 100%;
  height: 40px;
  background: #999;
}
</style>
