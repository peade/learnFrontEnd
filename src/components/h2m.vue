<template>
  <div>
    <div class="btn-div">
      <button @click="htmlToMd">html转换markdown</button>
    </div>
    <div class="container">
      <textarea class="text-area" v-model="html"> </textarea>
      <textarea class="text-area" v-model="md"> </textarea>
    </div>
  </div>
</template>

<script>
import h2m from 'h2m';
export default {
  name: 'h2m',
  props: {},
  data() {
    return {
      html: '',
      md: ''
    };
  },
  created() {},
  mounted() {},
  methods: {
    htmlToMd() {
      this.md = h2m(this.html);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.btn-div {
  text-align: center;
  margin-bottom: 10px;
}
.container {
  display: flex;
  justify-content: space-around;
  .text-area {
    flex-basis: 45%;
    min-height: 500px;
  }
}
</style>
