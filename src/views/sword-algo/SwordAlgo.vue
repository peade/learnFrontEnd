<template>
  <div>
    <h1>剑指算法</h1>
    <ol>
      <li>
        <h4>二维数组的查找</h4>
        <p>
          在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
        </p>
        <p>
          思路：选择最左下角的那个点作为起始点，也就是a[array.lenth][0],比它大就往右边走col++，比它小就往上面走row--。
        </p>
      </li>
      <li>
        <h4>
          链表转数组,按链表值从尾到头的顺序返回一个ArrayList
        </h4>
        <p>
          思路:
          把链表值全都装入数组中，再对数组进行reverse，链表的head通过.val取值，通过.next获取下一个值
        </p>
      </li>
      <li>
        <h4>
          重建二叉树
        </h4>
        <p>
          输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
        </p>
        <p>
          思路：前序遍历是先遍历根，所以先找出根节点，再分出左右树，递归左右子树的前序，中序
          。
        </p>
      </li>
      <li>
        <h4>旋转数组的最小数字</h4>
        <p>
          把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
          输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
          例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
          NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
        </p>
        <p>
          用排序的方法来做， sort()方法返回值大于1就将b排到a的前面 ！！
          注意是输出元素的最小值而不是数组
        </p>
      </li>
      <li>
        <h4>斐波那契数列</h4>
        <p>
          大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n
          &lt;= 39
        </p>
        <p>思路其实就是先写终止条件，再写递归条件</p>
      </li>
      <li>
        <h4>跳台阶</h4>
        <p>
          一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
        </p>
        <p>
          仔细分析一下也能看出这是一个斐波拉契数列。所以可以得出总跳法为: f(n) =
          f(n-1) + f(n-2)，同样采用上一个的方法
        </p>
      </li>
      <li>
        <h4>变态跳台阶</h4>
        <p>
          一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
        </p>
      </li>
      <li>
        <h4>矩形覆盖</h4>
        <p>
          我们可以用2* 1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*
          1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
        </p>
      </li>
      <li>
        <h4>二进制中1的个数</h4>
        <p>
          输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
        </p>
        <p>
          把一个整数减去1，再和原来的整数做与运算。这样就会让1的位置变换，那么一个整数的二进制表示中有多少个1，就可以进行多少次这样的操作。count用来计数，这个方法的话记住就好了
        </p>
      </li>
      <li>
        <h4>最大连续1的个数</h4>
        <p>题目：给定一个二进制数组， 计算其中最大连续1的个数。</p>
        <p>
          思路：时间按复杂度：O(n)<br />
          设置一个计数变量 count，来计数连续出现的
          1，max用来存不同组1的连续量。<br />
          从头到尾遍历，若为
          1，count++，若为0，求max与count的最大值，count变为0.
        </p>
      </li>
      <li>
        <h4>查找两个字符串中最长的公共子串</h4>
        <p>题目：给定一个二进制数组， 计算其中最大连续1的个数。</p>
        <p>
          化成一个二维数组，分解成单个的字符去匹配每个单个的字符，只要相同的值就相比前一个+1，不相同设为0；要知道起始位置和字串的长度。从图中可以看到的红字就是存放这个位置的最优解字串的长度，所以应该建立两个变量去存储其实位置的index和最大长度max。
        </p>
      </li>
      <li>
        <h4>
          洗牌算法 100个格子，10个雷，怎么实现每个格子有雷的概率都是1/10算法
        </h4>
        <p>
          在每次迭代时交换这个被取出的数字到原始列表的最后 <br />
          1. 初始化原始数组和新数组，原始数组长度为n(已知)；<br />
          2.
          从还没处理的数组（假如还剩k个）中，随机产生一个[0,k]之间的数字p（假设数组从0开始）；<br />
          3. 从剩下的k个数中把第随机数的位置取出；<br />
          4. 重复步骤2和3直到数字全部取完；<br />
          5. 从步骤3取出的数字序列便是一个打乱了的数列。<br />
          下面证明其随机性，即每个元素被放置在新数组中的第i个位置是1/n（假设数组大小是n）
        </p>
      </li>
      <li>
        <h4>字符串的排列</h4>
        <p>
          输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
        </p>
        <p>
          输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
        </p>
      </li>
      <li>
        <h4>数组中出现次数超过一半的数字</h4>
        <p>
          数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
        </p>
        <div>
          思路:
          <ol>
            <li>对数组排序</li>
            <li>
              如果存在这样的数字，那一定位于排序后数组的中位数位置，因此找到数组中位数num
            </li>
            <li>
              遍历数组，看看中位数出现的次数是否超过数组长度的一半<br />
              若超过，返回num；<br />
              若不超过，返回0
            </li>
          </ol>
        </div>
      </li>
      <li>
        <h4>连续子数组的最大和</h4>
        <p>
          HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)
        </p>
        <p>
          输入一个数组，数组里有正数也有负数（注意有可能全是负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为O(n)
        </p>
      </li>
      <li>
        <h4>丑数</h4>
        <p>
          把只包含质因子2、3和5的数称作丑数（Ugly
          Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。
          习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
        </p>
        <p>
          用到了动态规划的思想，把前面的丑数存着，生成后面的丑数。count2,count3,count5是判断点，用于判断从何处开始选出并乘以对应因子肯定会大于当前数组中最大丑数，而前面的丑数不用考虑。
        </p>
      </li>
      <li>
        <h4>两个链表的第一个公共结点</h4>
        <p>
          一开始我不是很理解，后来我是这样理解的：<br />
          这个办法不需要计算两个链表的长度，是由于它进行了链表拼接，两个链表的长度和一定是相等的<br />
          第一个指针p1扫描的是：第一个链表->null->第二个链表<br />
          第二个指针p2扫描的是：第二个链表->null->第一个链表<br />
          事实上，算法在很巧妙的补齐长度，那么最终两个指针一定会同时到达公共结点或者null
        </p>
      </li>
    </ol>
  </div>
</template>
<script>
// import { LogFnName } from '@/util/index'
export default {
  name: 'SwordAlgo',
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
    // 二维数组中查找值
    findInTwoDimensionArray(target, array) {
      const n = array.length
      const m = array[0].length
      let row = n - 1
      let col = 0
      while (row >= 0 && col <= m - 1) {
        if (target < array[row][col]) {
          row--
        } else if (target > array[row][col]) {
          col++
        } else if ((target = array[row][col])) {
          return true
        }
      }
    },
    // 链表转数组
    linkToList(head) {
      const arr = []
      while (head) {
        arr.push(head.val)
        head = head.next
      }
      return arr.reverse()
    },
    // 重建二叉树
    reConstructBinaryTree(pre, vin) {
      // 前序的根节点为第一个，通过pre[0]找到中序中根节点的位置，区分左右树
      if (pre.length === 0 || vin.length === 0) {
        return null
      }
      let index = vin.indexOf(pre[0])
      let left = vin.slice(0, index) // 中序左子树
      let right = vin.slice(index + 1) // 中序右子树
      // slice方法在只有一个参数的情况下，该方法返回从该参数指定位置到当前数组末尾的所有项
      return {
        val: pre[0],
        // 递归左右子树的前序、中序
        left: this.reConstructBinaryTree(pre.slice(1, index + 1), left),
        right: this.reConstructBinaryTree(pre.slice(index + 1), right)
      }
    },
    // 旋转数组最小值
    minValInRotateArr(array) {
      array.sort((a, b) => {
        if (a < b) {
          return -1
        } else {
          return 1
        }
      })
      return array[0]
    },
    // 斐波那契数列
    fibonacci(n) {
      if (n === 0) {
        return 0
      }
      const f = []
      f[1] = 1
      f[2] = 1
      for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
      }
      return f[n]
    },
    // 递归fibnacci
    fibonacci2(n) {
      if (n === 0) {
        return 0
      }
      if (n === 1) {
        return 1
      }
      return this.fibonacci2(n - 1) + this.fibonacci2(n - 2)
    },
    // 去重递归fibnacci
    fib2(n) {
      function fib_(n, a, b) {
        if (n === 0) {
          return a
        }
        return fib_(n - 1, b, a + b)
      }
      return fib_(n, 0, 1)
    },
    // for 循环fibnacci
    fibonacci3(n) {
      let last = 1
      let last2 = 0
      let current = last2
      for (let i = 1; i < n; i++) {
        last2 = last
        last = current
        current = last + last2
      }
      return current
    },
    // 跳台阶
    jumpFloor(number) {
      if (number === 1 || number === 2) {
        return 1
      }
      const data = {}
      data[1] = 1
      data[2] = 2
      for (let i = 3; i <= number; i++) {
        data[i] = data[i - 1] + data[i - 2]
        console.log(data[i])
      }
      console.log(data[number])
      return data[number]
    },
    // 变态跳台阶
    jumpFloor2(number) {
      if (number <= 2) {
        return number // number=0,1,2时，对应的跳法也是0，1，2
      }
      return this.jumpFloor2(number - 1) + this.jumpFloor2(number - 2)
    },
    // 矩形覆盖
    rectCover(number) {
      if (number == 0) return 0
      var f = []
      f[1] = 1
      f[2] = 2
      for (var i = 3; i <= number; i++) {
        f[i] = f[i - 1] + f[i - 2]
      }
      return f[number]
    },
    // 二进制中1的个数
    numberOf1(n) {
      let count = 0
      while (n != 0) {
        n = n & (n - 1)
        count++
      }
      return count
    },
    // 最大连续1的个数, 输入二进制数组
    findMaxConsecutiveOnes(nums) {
      let max = 0
      let count = 0
      for (let i in nums) {
        if (nums[i] === 1) {
          count++
        } else {
          max = Math.max(count, max)
          count = 0
        }
      }
      max = Math.max(count, max)
      return max
    },
    // 动态规划 fibnacci
    dpFibonacci() {},

    // 查找两个字符串中最长的公共子串
    dpMaxLongSubStr(str1, str2) {
      // 创建一个二维数组
      let n = str1.length
      let m = str2.length
      let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0))
      console.log(JSON.stringify(dp))
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
          if (str2[j - 1] === str1[i - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1
          } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
          }
        }
      }
      return dp[n][m]
    },
    // 乱序
    shuffle(arr) {
      for (let i = 0; i < arr.length; i++) {
        const idx = Math.floor(Math.random() * (i + 1))
        const tmp = arr[idx]
        arr[idx] = arr[i]
        arr[i] = tmp
      }
      return arr
    },
    // 字符 所有排序
    allLetterArray(str) {
      function unique(arr) {
        return Array.from(new Set(arr))
      }
      const result = []
      if (str.length < 2) {
        return str
      } else {
        // 剩余子串的全排列
        let preResult = this.allLetterArray(str.slice(1))
        // 遍历全排列数组
        for (let j = 0; j < preResult.length; j++) {
          for (let k = 0; k < preResult[j].length + 1; k++) {
            // 首字母放入K位置
            const temp =
              preResult[j].slice(0, k) + str[0] + preResult[j].slice(k)
            result.push(temp)
          }
        }
        // 排序+去重
        return unique(result).sort()
      }
    },
    // 出现次数超过总长度一半的数
    moreThanHalfNum(numbers) {
      const len = numbers.length
      if (len < 1) {
        return 0
      }
      // 数组排序
      const sorted = numbers.sort()
      // 数组中间值
      const mid = sorted[Math.floor(len / 2)]
      // 中间值出现的次数
      let count = 0
      numbers.forEach(item => {
        if (item === mid) {
          count++
        }
      })

      return count > len / 2 ? mid : 0
    },
    // 最大子字符串和
    findGreatestSumOfSubArray(array) {
      if (!array || array.length < 1) {
        return false
      }
      let max = array[0]
      let sum = 0
      for (let i = 0; i < array.length; i++) {
        if (sum < 0) {
          sum = array[i]
        } else {
          sum += array[i]
        }
        if (max < sum) {
          max = sum
        }
      }
      return max
    },
    // 丑数
    getUglyNumber(index) {
      if (index < 1) {
        return 0
      }
      let res = [1]
      let count2 = 0
      let count3 = 0
      let count5 = 0
      let i = 1
      for (; i < index; i++) {
        res[i] = Math.min(res[count2] * 2, res[count3] * 3, res[count5] * 5)
        if (res[i] === res[count2] * 2) {
          count2++
        }
        if (res[i] === res[count3] * 3) {
          count3++
        }
        if (res[i] === res[count5] * 5) {
          count5++
        }
      }
      return res[i - 1]
    },
    // 链表公共节点
    findFirstCommonNode(pHead1, pHead2) {
      // write code here
      let p1 = pHead1
      let p2 = pHead2
      while (p1 != p2) {
        p1 = p1 == null ? pHead2 : p1.next
        p2 = p2 == null ? pHead1 : p2.next
      }
      return p1
    }
  }
}
</script>
<style scoped lang="scss">
div {
  padding: 10px;
  text-align: justify;
}
</style>
