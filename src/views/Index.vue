<template>
  <div v-show="showRoutes">
    <van-row gutter="10">
      <van-col
        class="col"
        span="6"
        v-for="item in routers"
        :key="item.name"
        @click="goPage(item)"
      >
        {{ item.meta.title }}
      </van-col>
    </van-row>
  </div>
</template>
<script>
import routers from '@/router/routers'
// import { isPlainObject } from '@/util/jq-tools'
export default {
  name: 'Index',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      routers,
      showRoutes: true
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.hashDemo()
    // history.replaceState('', '', location.href + '?a=b')
    // this.testClass()
    // this.domEvt()
  },
  destroyed() {},
  methods: {
    domEvt() {
      document.body.onclick = function(e) {
        console.dir(this)
        console.log(e)
      }
      document.body.addEventListener('click', function() {
        console.log('add evt', this)
      })
    },
    goPage(item) {
      this.$router.push({ path: item.path })
    },
    test() {
      function a() {
        this.a = 1111
      }
      a.b = 123123
      console.log(a, a.b)
    },
    cameraCase(str) {
      const rdashAlpha = /-([a-z])/g
      return str.replace(rdashAlpha, function(matchStr, letter) {
        console.log(matchStr, letter)
        return letter.toUpperCase()
      })
    },
    hashDemo() {
      // hash change只能监听location.replace方法对url的改变
      window.onhashchange = function(event) {
        console.log(event)
      }
    },
    testClass() {
      class a {
        test() {
          console.log(111)
        }
      }
      class b {
        constructor(a) {
          this.a = a
        }
        test() {
          console.log(this.a)
        }
      }
      console.dir(a)
      console.dir(b)
      console.dir(new a())
      console.dir(new b())
    },
    jsonStr() {
      const reg = /\d+/
      const reg2 = new RegExp(reg)
      console.log(reg2.test('12312312'))
      const obj = {
        a: 1,
        date: new Date(),
        reg: /\d+/
      }
      const str = JSON.stringify(obj)
      console.log(str)
      const data = JSON.parse(str)
      console.log(data)
    }
  }
}
</script>
<style scoped lang="scss">
.col {
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  background-color: #39a9ed;
  background-clip: content-box;
  line-height: 2;
  font-size: 1rem;
}
</style>
