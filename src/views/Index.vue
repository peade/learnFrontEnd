<template>
  <div>
    <header>页眉</header>
    <main>
      <article>
        <h1>文章标题</h1>
        <p>文章内容</p>
        <figure>
          <figcaption>示例图片</figcaption>
          <img
            src="https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF"
          />
        </figure>
        <figure>
          <p><code>const foo = 'hello';</code></p>
          <figcaption>JavaScript 代码示例</figcaption>
        </figure>
      </article>
      <picture>
        <source media="(max-width: 500px)" srcset="cat-vertical.jpg" />
        <source media="(min-width: 501px)" srcset="cat-horizontal.jpg" />
        <img
          src="https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF"
          alt="cat"
        />
      </picture>
    </main>
    <footer>页尾</footer>
    <dl>
      <dt>CPU</dt>
      <dd>中央处理器</dd>
      <dt>Memory</dt>
      <dd>内存</dd>
      <dt>Hard Disk</dt>
      <dd>硬盘</dd>
    </dl>
  </div>
</template>
<script>
  export default {
    name: 'Index',
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
    mounted() {},
    destroyed() {},
    methods: {}
  }
</script>
<style scoped lang="scss"></style>
