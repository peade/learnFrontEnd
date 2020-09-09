<template>
  <div class="load-container" />
</template>
<script>
export default {
  name: 'TypeFive',
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
  width: 60px;
  height: 60px;
  background-color: #00adb5;

  margin: 50px auto;
  animation: rotateplane 1.2s infinite ease-in-out;
}
@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
