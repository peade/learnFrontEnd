<template>
  <div>requestAnimationFrame</div>
</template>
<script>
export default {
  name: 'ReqAnim',
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
    animate({ duration = 100, draw = () => {}, timing = () => {} }) {
      let start = performance.now()
      requestAnimationFrame(function animFn(time) {
        let timeFraction = (time - start) / duration
        if (timeFraction > 1) {
          timeFraction = 1
        }
        const progress = timing(timeFraction)

        draw(progress)

        if (timeFraction < 1) {
          requestAnimationFrame(animFn)
        }
      })
    },
    // 抛物线
    quad(timeFraction) {
      return Math.pow(timeFraction, 2)
    },
    // 圆弧
    circ(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction))
    },
    // 反弹
    back(x, timeFraction) {
      return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
    },
    // 弹跳
    // bounce(timeFraction) {
    //   for (let a = 0, b = 1; a += b, b /= 2) {
    //     if (timeFraction >= (7 - 4 * a) / 11) {
    //       return (
    //         -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    //       )
    //     }
    //   }
    // },
    // 伸缩
    elastic(x, timeFraction) {
      return (
        Math.pow(2, 10 * (timeFraction - 1)) *
        Math.cos(((20 * Math.PI * x) / 3) * timeFraction)
      )
    }
  }
}
</script>
<style scoped lang="scss"></style>
