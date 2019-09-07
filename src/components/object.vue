<template>
  <div>
    object可以在页面里嵌入pdf、图片等文件
    <object type="application/pdf"
            data="https://acm.sjtu.edu.cn/ppca/w/images/9/9f/Js.pdf"
            width="100%"
            height="500px">
      <param name="foo" value="bar">
    </object>
  </div>
</template>

<script>
  export default {
    name: 'object',
    mixins: [],

    components: {},

    props: {},

    data() {
      return {}
    },

    computed: {},

    watch: {},

    created() {
    },

    mounted() {
    },

    destroyed() {
    },

    methods: {}
  }
</script>

<style scoped>

</style>