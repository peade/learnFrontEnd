<template>
  <div>
    <son-node />
  </div>
</template>
<script>
  import SonNode from '../components/SonNode.vue'
  export default {
    name: 'ProvideInject',
    filters: {},
    components: { SonNode },
    mixins: [],
    props: {},
    data() {
      return {
        nameName: 'the provide name'
      }
    },
    provide() {
      return {
        theName: this.nameName,
        dynamicName: () => {
          return this.nameName
        }
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      setTimeout(() => {
        console.log(11111)
        this.nameName = 'the pro-inj demo'
      }, 2000)
    },
    destroyed() {},
    methods: {}
  }
</script>
<style scoped lang="scss"></style>
