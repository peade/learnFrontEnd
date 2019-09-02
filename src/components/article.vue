<template>
  <article>
    <header>
      <h1>article 使用说明</h1>
      <p><code>&lt;article&gt;</code>元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。
      </p>
      <h2><code>&lt;header&gt;</code>说明</h2>
      <p>
        用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。
      </p>
    </header>
    <section>
      <h3><code>&lt;section&gt;</code>部分</h3>
      <p>
        HTML Section 元素 (
        <code>&lt;section&gt;</code>) 表示文档中的一个区域（或节），比如，内容中的一个专题组，一般来说会有包含一个标题（heading）。一般通过是否包含一个标题 (
        <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>element) 作为子节点 来 辨识每一个<code>&lt;section&gt;</code>。
      </p>
    </section>
    <footer>
      <h3><code>&lt;footer&gt;</code>部分</h3>
      <p>
        表示最近一个章节内容或者根节点（sectioning root ）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。
      </p>
    </footer>
  </article>
</template>

<script>
  export default {
    name: 'article',
    mixins: [],

    components: {},

    props: {},

    data() {
      return {}
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

<style scoped>

</style>