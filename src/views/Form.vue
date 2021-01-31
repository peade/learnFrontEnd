<template>
  <form autocomplete="off" novalidate>
    <fieldset name="theFieldSet">
      <legend>注册表单</legend>
      <label>Key:</label>
      <input
        type="text"
        name="val"
        autofocus
        autocomplete="on"
        v-model="info.val"
      />
    </fieldset>
    <output value="12312" />
    <button type="submit" @click.prevent="logData">按钮</button>
  </form>
</template>
<script>
  export default {
    name: 'FormEle',
    filters: {},
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        info: {
          val: ''
        }
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      logData() {
        console.log(this.info)
      }
    }
  }
</script>
<style scoped lang="scss"></style>
