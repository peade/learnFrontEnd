<template>
  <div>
    <div>
      {{ theName }}
    </div>
    <div>
      {{ dyName }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GrandsonNode',
    filters: {},
    components: {},
    mixins: [],
    props: {},
    data() {
      return {}
    },
    inject: ['theName', 'dynamicName'],
    computed: {
      dyName() {
        return this.dynamicName()
      }
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {}
  }
</script>
<style scoped lang="scss"></style>
