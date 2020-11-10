<template>
  <div>
    <van-uploader v-model="fileList" />
    <van-button @click="minify">压缩图片</van-button>
    <img :src="miniSrc" />
  </div>
</template>
<script>
  import Compress from 'compressorjs'
  import { ImgFileToBase64 } from '@/utils/tools'
  export default {
    name: 'CompressImage',
    filters: {},
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        fileList: [],
        miniSrc: ''
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      minify() {
        console.log('origin size', this.fileList[0].file.size)
        const _this = this
        new Compress(this.fileList[0].file, {
          success(result) {
            console.log('compressed size', result.size)
            ImgFileToBase64(result)
              .then(src => {
                _this.miniSrc = src
              })
              .catch(e => {
                console.log(e)
              })
            console.log(result.name)
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  img {
    max-width: 100%;
  }
</style>
