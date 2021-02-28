<template>
  <div>
    <h4>代理模式</h4>
    <p>代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。</p>
  </div>
</template>
<script>
export default {
  name: 'ProxyPattern',
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
    this.proxyPat()
  },
  destroyed() {},
  methods: {
    proxyPat() {
      const Flower = function() {}
      const xiaoming = {
        sendFlower: function(target) {
          const flower = new Flower()
          target.receiveFlower(flower)
        }
      }
      const B = {
        receiveFlower: function(flower) {
          A.listenGoodMood(function() {
            // 监听 A 的好心情
            A.receiveFlower(flower)
          })
        }
      }
      const A = {
        receiveFlower: function(flower) {
          console.log('收到花 ' + flower)
        },
        listenGoodMood: function(fn) {
          setTimeout(function() {
            // 假设 10 秒之后 A 的心情变好
            fn()
          }, 2000)
        }
      }
      xiaoming.sendFlower(B)
    }
  }
}
</script>
<style scoped lang="scss"></style>
