<template>
  <div>排序算法</div>
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
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.testBubbleSort()
    this.testMBubbleSort()
    this.testSelectionSort()
    this.testInsertionSort()
    this.testMergeSort()
    this.testQuickSort()
    this.testCountingSort()
    this.testBucketSort()
  },
  destroyed() {},
  methods: {
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
    }
  }
}
</script>
<style scoped lang="scss"></style>
