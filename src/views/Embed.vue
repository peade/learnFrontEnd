<template>
  <div>
    <h1>嵌入元素</h1>
    <embed
      src="https://video.yinyuetai.com/29f2ba4e54804910b27ea46f99764a96.mp4"
    />
    <progress value="30" max="100"></progress>
    <br />
    <meter
      value="90"
      min="10"
      max="100"
      low="40"
      high="80"
      optimum="60"
    ></meter>
  </div>
</template>
<script>
  export default {
    name: 'Embed',
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
<style scoped lang="scss"></style>
