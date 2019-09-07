<template>
  <div>
    <button @click="isShow=!isShow">切换显示</button>
    <transition name="fade">
      <div v-show="isShow">
        animate
      </div>
    </transition>
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <div v-show="isShow">
        Using Animate.css
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'anim',
    mixins: [],

    components: {},

    props: {},

    data() {
      return {
        isShow: false
      }
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

<style scoped lang="scss">
  .fade-enter-active {
    transition: all 1s;
  }

  .fade-enter {
    opacity: 0;
  }

  /* .fade-enter-active, .fade-leave-active {
     transition: opacity .5s;
   }
   .fade-enter, .fade-leave-to  {
     opacity: 0;
   }*/
</style>