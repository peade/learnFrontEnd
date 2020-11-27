<template>
  <div>
    <ul>
      <li><div class="circle1"></div></li>
      <li><div class="circle2"></div></li>
      <li><div class="circle3"></div></li>
      <li><div class="circle4"></div></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HalfCircle',
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
.circle1 {
  width: 100px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100% 0 0 100%/50%;
  border-right: none;
}
.circle2 {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50% 50% 0 0/100% 100% 0 0;
  border-bottom: none;
}
.circle3 {
  width: 100px;
  height: 200px;
  border: 1px solid black;
  border-radius: 0 100% 100% 0/50%;
  border-left: none;
}
.circle4 {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  border-top: none;
}
</style>
