<template>
  <div>字母字节数测试</div>
</template>
<script>
export default {
  name: 'CharCode',
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
  mounted() {
    this.charCode()
  },
  destroyed() {},
  methods: {
    charCode() {
      const str = 'azAZ'
      for (let i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i))
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
