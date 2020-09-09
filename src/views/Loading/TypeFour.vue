<template>
  <div class="load-container">
    <div class="container">
      <div class="boxLoading boxLoading1" />
      <div class="boxLoading boxLoading2" />
      <div class="boxLoading boxLoading3" />
      <div class="boxLoading boxLoading4" />
      <div class="boxLoading boxLoading5" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TypeFour',
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
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
    .boxLoading {
      background-color: #00adb5;
      height: 100%;
      width: 6px;
      display: inline-block;
      margin: 0 1px;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .boxLoading2 {
      animation-delay: -1.1s;
    }
    .boxLoading3 {
      animation-delay: -1s;
    }
    .boxLoading3 {
      animation-delay: -1s;
    }
    .boxLoading4 {
      animation-delay: -0.9s;
    }
    .boxLoading5 {
      animation-delay: -0.8s;
    }
  }
}
@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
