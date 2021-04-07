<template>
  <div>
    <div>
      100个请求，每次最多5个
    </div>
  </div>
</template>
<script>
export default {
  name: 'MultiAjax',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      arr: [],
      maxNum: 5,
      curIdx: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.testNullArr()
    this.generateArr()
    // this.multi2()
    this.multiRequest(this.arr, 5)
      .then(res => {
        console.log('multiReq ', res)
      })
      .catch(e => {
        console.dir(e)
      })
  },
  destroyed() {},
  methods: {
    testNullArr() {
      const arr = new Array()
      arr[5] = 5
      if (arr.includes(null)) {
        console.log('has null')
      }
    },
    generateArr() {
      for (let i = 0; i < 100; i++) {
        this.arr.push(Math.ceil(Math.random() * 1000))
      }
      this.arr.sort((a, b) => {
        return a > b ? 1 : -1
      })
      console.log(this.arr)
    },
    multi() {
      for (let i = 0; i < this.maxNum; i++) {
        this.ajax(this.arr[i])
      }
    },
    multi2(resolve, reject) {
      const resArr = []
      while (this.curIdx < 5 && this.arr.length > 0) {
        const item = this.arr.pop()
        this.ajax(item).then(
          data => {
            resArr.push(data)
            if (this.arr.length === 100) {
              resolve(resArr)
            } else {
              this.curIdx--
              this.multi2()
            }
          },
          err => {
            reject(err)
          }
        )
        this.curIdx++
      }
    },
    multiHandle() {
      return new Promise((resolve, reject) => {
        this.multi2(resolve, reject)
      })
    },
    ajax(item) {
      console.log('start------' + item)
      return new Promise((resolve, reject) => {
        const val = Math.random() * 10000
        if (val < 2000) {
          reject(new Error('smaller then 1000'))
        }
        setTimeout(() => {
          console.log('finish----' + item)
          resolve(item)
        }, val)
      })
    },
    async single(val) {
      await this.ajax(val)
    },
    multiRequest(urls = [], maxNum) {
      const _this = this
      // 请求总数
      const len = urls.length
      // 根据请求数量创建一个数组来保存请求的结果
      const result = new Array(len).fill(null)
      let isError = false
      // 当前完成的数量
      let count = 0

      return new Promise((resolve, reject) => {
        // 请求maxNum
        while (count < maxNum) {
          next()
        }
        function next() {
          if (isError) {
            return
          }
          let current = count++
          // 处理边界条件
          if (current >= len) {
            if (!result.includes(null)) {
              resolve(result)
            }
            return
          }
          console.log(current)
          let url = urls[current]
          // console.log(`开始 ${current}`, new Date().toLocaleString())
          _this
            .ajax(url)
            .then(res => {
              result[current] = res
              // 请求没有全部完成, 就递归
              if (current < len) {
                next()
              }
            })
            .catch(err => {
              result[current] = err
              isError = true
              // 请求没有全部完成, 就递归
              if (current < len) {
                next()
              }
              reject(err)
            })
        }
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>
