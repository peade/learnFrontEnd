<template>
  <div>
    <h4>数据访问对象模式（Data Access Object Pattern）</h4>
    <p>即不直接通过数据对象，而是抽象成Dao层来做这个事情。</p>
  </div>
</template>
<script>
import { StudentDao } from '@/util/data-access-object'
export default {
  name: 'DataAccessObjectPattern',
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
    const studentDao = new StudentDao()
    //输出所有的学生
    for (let student of studentDao.getAllStudents()) {
      console.log(
        'Student: [RollNo : ' +
          student.getRollNo() +
          ', Name : ' +
          student.getName() +
          ' ]'
      )
    }
    //更新学生
    const student = studentDao.getAllStudents()[
      studentDao.getAllStudents().getIndexByRollNo(0)
    ]
    student.setName('Michael')
    studentDao.updateStudent(student)
    //获取学生
    studentDao.getStudent(0)
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
