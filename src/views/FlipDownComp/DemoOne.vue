<template>
  <div>
    <p>FlipDown Demo</p>
    <div class="wrap">
      <div class="base">{{ baseNum }}</div>
      <div
        class="top"
        :class="{ 'top-anim': topAnim }"
        @animationend="onAnimationEnd"
      >
        {{ cur }}
      </div>
      <div class="down" :class="{ 'down-anim': downAnim }">{{ cur }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoOne',
  filters: {},
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      topAnim: false,
      downAnim: false,
      prev: 0,
      cur: 0,
      baseNum: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.startFlip()
  },
  destroyed() {},
  methods: {
    startFlip() {
      setTimeout(() => {
        const temp = this.cur
        this.cur = temp + 1
        this.prev = temp
        this.topAnim = true
        this.downAnim = true
        this.startFlip()
      }, 1000)
    },
    onAnimationEnd() {
      this.topAnim = false
      this.downAnim = false
      this.baseNum = this.cur
    }
  }
}
</script>
<style scoped lang="scss">
.wrap {
  width: 60px;
  position: relative;
  text-align: center;
  .base {
    width: 100%;
    height: 100px;
    font-size: 50px;
    line-height: 100px;
    color: #fff;
    background: lightgreen;
  }
  .top,
  .down {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    font-size: 50px;
    line-height: 100px;
    color: #fff;
    background: lightgreen;
    animation-timing-function: linear;
    animation-duration: 400ms;
    // 为了chrome，需要一个小的角度，否则字体渲染错位
    transform: rotateX(-0.01deg);
    border-radius: 3px;
  }
  .top {
    z-index: 2;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    backface-visibility: visible;
  }
  .top-anim {
    animation-name: animate-up;
  }
  .down {
    transform: rotateX(-180deg);
    backface-visibility: visible;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  }
  .down-anim {
    animation-name: animate-down;
  }
}

@keyframes animate-up {
  0% {
    transform: rotateX(-0.01deg);
    opacity: 1; // 改变opacity 为了QQ浏览器和safari(不支持z-index animate)
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    transform: rotateX(-180deg);
    opacity: 0;
  }
}
@keyframes animate-down {
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(-0.01deg);
  }
}
</style>
