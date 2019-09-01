<template>
  <div>
    <div>
      说明: dl内容块、dt：内容标题，dd：内容。<br>
      dl用于展示键值对列表，dt键，dd值
    </div>
    <dl>
      <dt>姓名：</dt>
      <dd>吴先生</dd>
      <dt>手机号：</dt>
      <dd>13911111111</dd>
    </dl>
  </div>

</template>

<script>
  export default {
    name: 'dldtdd',
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
  dt {
    float: left;
  }
</style>