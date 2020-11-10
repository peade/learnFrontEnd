<template>
  <div>
    <van-uploader v-model="fileList" />
    <van-button @click="minify">压缩图片</van-button>
    <img :src="miniSrc" />
  </div>
</template>
<script>
  import Compress from 'compressorjs'
  import {
    ImgFileToBase64,
    Base64ToImgFile,
    Base64ToBlob,
    FileToBlob,
    BlobToUrl
  } from '@/utils/file-blob-base64'
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
        FileToBlob(this.fileList[0].file).then(blob => {
          console.log({ blob })
          this.miniSrc = BlobToUrl(blob)
          console.log(this.miniSrc)
        })

        // const _this = this
        new Compress(this.fileList[0].file, {
          success(result) {
            console.log('compressed size', result.size)
            ImgFileToBase64(result)
              .then(src => {
                // _this.miniSrc = src
                console.log(Base64ToImgFile(src))
                const blob = Base64ToBlob(src)
                console.log('Base64ToBlob', blob.type)
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
