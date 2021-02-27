import { Compare, defaultCompare, swap } from '../../util/data-structure'

export function createNonSortedArray(num, max = 10000) {
  const array = []
  for (let i = num; i > 0; i--) {
    array.push(Math.round(Math.random() * max))
  }
  return array
}

// 冒泡排序
/*
冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至
正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
 */
export function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
// 改进后的冒泡排序
export function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

// 选择排序
/*
选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并
将其放置在第一位，接着找到第二小的值并将其放在第二位，
*/
export function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}
// 插入排序
/**
插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着，
它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确
排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。
*/

export function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array
  let temp
  for (let i = 1; i < length; i++) {
    let j = i
    temp = array[i]
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}

// 归并算法
// 归并排序是第一个可以实际使用的排序算法。
// 归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

function merge(left, right, compareFn) {
  let i = 0
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    )
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
export function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    array = merge(left, right, compareFn)
  }
  return array
}

// 快速排序
/**
 * (1) 首先，从数组中选择一个值作为主元（pivot），也就是数组中间的那个值。
(2) 创建两个指针（引用），左边一个指向数组第一个值，右边一个指向数组最后一个值。移
动左指针直到我们找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，然后
交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元
之前，而比主元大的值都排在主元之后。这一步叫作划分（partition）操作。
(3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的
子数组）重复之前的两个步骤，直至数组已完全排序。
 */

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}

function quick(array, left, right, compareFn) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right, compareFn)
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }
    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}
export function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn)
}

// 计数排序
/**
 * 计数排序是我们在本书中学习的第一个分布式排序。分布式排序使用已组织好的辅助数据结
构（称为桶），然后进行合并，得到排好序的数组。计数排序使用一个用来存储每个元素在原始
数组中出现次数的临时数组。在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序
后的结果数组。

整数排序算法
 */
function findMaxValue(array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
function findMinValue(array) {
  let min = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}
export function countingSort(array) {
  if (array.length < 2) {
    return array
  }
  const maxValue = findMaxValue(array)
  const counts = new Array(maxValue + 1)
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })
  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i
      count--
    }
  })
  return array
}

/**
 * @name 桶排序
 桶排序（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组），
再使用一个简单的排序算法，例如插入排序（用来排序小数组的不错的算法），来对每个桶进行
排序。然后，它将所有的桶合并为结果数组。
 * 
 */
function createBuckets(array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}

function sortBuckets(buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null && buckets[i] !== undefined) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}

export function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array
  }
  const buckets = createBuckets(array, bucketSize)
  return sortBuckets(buckets)
}

/**
 * @name 基数排序
 * @desc 基数排序也是一个分布式排序算法，它根据数字的有效位或基数（这也是它为什么叫基数排
序）将整数分布到桶中。基数是基于数组中值的记数制的。
 * 
 */
export function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array
  }
  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)
  let significantDigit = 1 // {1}
  while ((maxValue - minValue) / significantDigit >= 1) {
    // {2}
    array = countingSortForRadix(array, radixBase, significantDigit, minValue) // {3}
    significantDigit *= radixBase // {4}
  }
  return array
}
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let bucketsIndex
  const buckets = []
  const aux = []
  for (let i = 0; i < radixBase; i++) {
    // {5}
    buckets[i] = 0
  }
  for (let i = 0; i < array.length; i++) {
    // {6}
    bucketsIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase
    ) // {7}
    buckets[bucketsIndex]++ // {8}
  }
  for (let i = 1; i < radixBase; i++) {
    // {9}
    buckets[i] += buckets[i - 1]
  }
  for (let i = array.length - 1; i >= 0; i--) {
    // {10}
    bucketsIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase
    ) // {11}
    aux[--buckets[bucketsIndex]] = array[i] // {12}
  }
  for (let i = 0; i < array.length; i++) {
    // {13}
    array[i] = aux[i]
  }
  return array
}
