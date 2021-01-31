<template>
  <div>
    Text Element
    <table style="height:100px;overflow:scroll;">
      <caption>
        这是一个人物表
      </caption>
      <colgroup>
        <col />
        <col style="background:red;" span="1" />
      </colgroup>
      <thead>
        <tr>
          <th>元素名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>a</td>
          <td>生成超链接</td>
        </tr>
        <tr>
          <td>br</td>
          <td>强制换行</td>
        </tr>
        <tr>
          <td>wbr</td>
          <td>可安全换行</td>
        </tr>
        <tr>
          <td>b</td>
          <td>标记一段文字但不强调</td>
        </tr>
        <tr>
          <td>a</td>
          <td>生成超链接</td>
        </tr>
        <tr>
          <td>br</td>
          <td>强制换行</td>
        </tr>
        <tr>
          <td>wbr</td>
          <td>可安全换行</td>
        </tr>
        <tr>
          <td>b</td>
          <td>标记一段文字但不强调</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">统计：共两名</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'Text',
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
