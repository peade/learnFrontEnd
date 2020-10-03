<template>
  <div>
    Index
  </div>
</template>
<script>
  export default {
    name: 'Index',
    filters: {},
    components: {},
    mixins: [],
    data() {
      return {
        routeList: []
      }
    },
    computed: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
      console.log(typeof this.toType)
    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    methods: {
      toType(obj) {
        const class2type = {}
        const toString = class2type.toString

        if (obj == null) {
          return obj + ''
        }
        console.log(toString.call(obj), class2type[toString.call(obj)])

        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === 'object' || typeof obj === 'function'
          ? class2type[toString.call(obj)] || 'object'
          : typeof obj
      }
    }
  }
</script>
<style lang="scss" scoped>
  .list {
    a {
      padding: 10px;
    }
  }
</style>
