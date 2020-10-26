<template>
  <main class="dialog">
    <div class="content">
      <div v-html="message"></div>
      <div>
        <button v-if="isShowButtonFalse" @click="choose(false)">
          {{ buttonFalseText }}
        </button>
        <button @click="choose(true)">{{ buttonTrueText }}</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Confirm',
    mixins: [],

    components: {},

    props: {
      isShowButtonFalse: {
        type: Boolean,
        default: false
      },
      buttonTrueText: {
        type: String,
        default: '确定'
      },
      buttonFalseText: {
        type: String,
        default: '取消'
      },
      message: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        value: false
      }
    },

    computed: {},

    watch: {},

    created() {},

    mounted() {},

    destroyed() {},

    methods: {
      choose(value) {
        this.$emit('result', value)
        this.value = value
        this.$destroy()
      }
    }
  }
</script>

<style scoped lang="scss">
  .dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
    }
  }
</style>
