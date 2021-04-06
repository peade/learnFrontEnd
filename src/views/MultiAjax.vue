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
    this.generateArr()
    this.multi2()
  },
  destroyed() {},
  methods: {
    generateArr() {
      for (let i = 0; i < 100; i++) {
        this.arr.push(Math.ceil(Math.random() * 100))
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
      return new Promise(resolve => {
        const val = Math.random() * 10000
        setTimeout(() => {
          console.log('finish----' + item)
          resolve(item)
        }, val)
      })
    },
    async single(val) {
      await this.ajax(val)
    }
  }
}
</script>
<style scoped lang="scss"></style>
