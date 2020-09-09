<template>
  <div class="load-container">
    <div class="load load1" />
    <div class="load load2" />
    <div class="load " />
  </div>
</template>
<script>
export default {
  name: 'TypeSix',
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
  width: 150px;
  margin: 50px auto;
  text-align: center;
  .load {
    width: 20px;
    height: 20px;
    background: #00adb5;

    border-radius: 100%;
    display: inline-block;
    animation: bouncedelay 1.4s infinite ease-in-out;
    animation-fill-mode: both;
  }
  .load1 {
    animation-delay: -0.32s;
  }
  .load2 {
    animation-delay: -0.16s;
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
