<template>
  <div>
    <h1 v-test="'abd'">
      Index
    </h1>
    <img :src="imgSrc" v-imgerr="defaultSrc" />
  </div>
</template>
<script>
  import defaultImg from '@/assets/logo.png'
  export default {
    name: 'Index',
    filters: {},
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        imgSrc:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691091504&di=924e14780fa2ab1b126056f23963754b&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F30%2F220025pxfkhykvkgkvuktq.jpg',

        defaultSrc: defaultImg
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      setTimeout(() => {
        this.imgSrc = 'fasfdasdfasdfasdf'
      }, 1000)
    },
    destroyed() {},
    methods: {}
  }
</script>
<style scoped lang="scss">
  h1 {
    text-align: center;
  }
  img {
    width: 100%;
  }
</style>
