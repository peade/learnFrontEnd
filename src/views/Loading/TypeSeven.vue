<template>
  <div class="load-container">
    <div class="container container1">
      <div class="circle circle1" />
      <div class="circle circle2" />
      <div class="circle circle3" />
      <div class="circle circle4" />
    </div>
    <div class="container container2">
      <div class="circle circle1" />
      <div class="circle circle2" />
      <div class="circle circle3" />
      <div class="circle circle4" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TypeSeven',
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
  methods: {}
}
</script>
<style scoped lang="scss">
.load-container {
  position: relative;
  margin: 50px auto;
  width: 48px;
  height: 48px;
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    .circle {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #00adb5;
      border-radius: 100%;
      animation: bouncedelay 1.2s infinite ease-in-out;
      animation-fill-mode: both;
    }
    .circle1 {
      top: 0;
      left: 0;
    }
    .circle2 {
      top: 0;
      right: 0;
    }
    .circle3 {
      right: 0;
      bottom: 0;
    }
    .circle4 {
      left: 0;
      bottom: 0;
    }
  }
  .container1 {
    .circle2 {
      animation-delay: -0.9s;
    }
    .circle3 {
      animation-delay: -0.6s;
    }
    .circle4 {
      animation-delay: -0.3s;
    }
  }
  .container2 {
    transform: rotateZ(45deg);
    .circle1 {
      animation-delay: -1.1s;
    }
    .circle2 {
      animation-delay: -0.8s;
    }
    .circle3 {
      animation-delay: -0.5s;
    }
    .circle4 {
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s;
    }
  }
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
