<template>
  <van-cell-group>
    <van-field label="快递公司" v-model.trim="comName"></van-field>
    <van-field label="快递单号" v-model.trim="nu"></van-field>
    <van-button type="primary" @click="queryKuaidi">查询</van-button>
  </van-cell-group>
</template>
<script>
  import { KuaiDiCompany, ExpressQueryByKuaiDi100 } from '@/utils/kuai-di-100'
  export default {
    name: 'Kuaidi100',
    filters: {},
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        comName: '',
        nu: ''
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      console.log(this.$route)
    },
    destroyed() {},
    methods: {
      queryKuaidi() {
        let com = ''
        for (let k in KuaiDiCompany) {
          if (KuaiDiCompany[k] === this.comName) {
            com = k
          }
        }
        const link = ExpressQueryByKuaiDi100({
          type: 'H5',
          com,
          nu: this.nu,
          coname: 'expressQuery',
          callbackurl: encodeURIComponent(location.href)
        })
        console.log(link)
        location.href = link
      }
    }
  }
</script>
<style scoped lang="scss"></style>
