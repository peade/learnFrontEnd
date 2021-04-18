<template>
  <div>
    <h4>传输对象模式（Transfer Object Pattern）</h4>
    <p>是一种业务对象传输的实践表达。</p>
  </div>
</template>
<script>
import { StudentBO } from '@/util/transfer-object'
export default {
  name: 'TransferObjectPattern',
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
    const studentBusinessObject = new StudentBO()
    //输出所有的学生
    for (const student of studentBusinessObject.getAllStudents()) {
      console.log(
        'Student: [RollNo : ' +
          student.getRollNo() +
          ', Name : ' +
          student.getName() +
          ' ]'
      )
    }
    //更新学生
    const student = studentBusinessObject.getAllStudents()[
      studentBusinessObject.getAllStudents().getIndexByRollNo(0)
    ]
    student.setName('Michael')
    studentBusinessObject.updateStudent(student)
    //获取学生
    studentBusinessObject.getStudent(0)
    console.log(
      'Student: [RollNo : ' +
        student.getRollNo() +
        ', Name : ' +
        student.getName() +
        ' ]'
    )
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
