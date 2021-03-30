<template>
  <div>
    <h4>MVC模式（Model-View-Controller Pattern）</h4>
    <p>
      常用于单应用框架或多应用的单体框架中,不过目前前后端采取分离形态，所以V很多已挪到了前端。MVC模式指的是模型，视图，控制器相互分离的一种思想。
    </p>
    <p>
      在MVC模式下，每层各司其职，层次清楚，层级干涉度小，有利于解除应用内层级之间的耦合。
    </p>
  </div>
</template>
<script>
import {
  retrieveStudentFromDatabase,
  StudentView,
  StudentController
} from '@/util/mvc'
export default {
  name: 'MvcPattern',
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
  mounted() {
    const model = retrieveStudentFromDatabase()
    //创建一个视图：把学生详细信息输出到控制台
    const view = new StudentView()
    const controller = new StudentController(model, view)
    controller.updateView()
    //更新模型数据
    controller.setStudentName('John')
    controller.updateView()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
