<template>
  <div class="main">
    <p>address
      标签，元素中任何形式的内容所提供的联系信息适用于上下文的背景信息,可以是必要的任何一种联系方式,比如真实地址、URL、电子邮箱、电话号码、社交媒体账号、地理坐标等等。此元素应该包含联系信息对应的个人、团体或组织的名称。
    </p>
    <address>
      查看作者的博客：<a href="https://peade.github.io/">
      https://peade.github.io/</a>
    </address>
    <p>
      当表示一个和联系信息无关的任意的地址时，请改用 &lt;p&gt; 元素而不是 &lt;address&gt; 元素。
      这个元素不能包含除联系信息之外的任何信息，比如出版日期（这应当被包含在 &lt;time&gt; 元素之中）。
      通常，&lt;address> 元素可以放在 &lt;footer&gt; 元素之中（如果存在的话）。
    </p>
  </div>

</template>

<script>
  export default {
    name: 'address',
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