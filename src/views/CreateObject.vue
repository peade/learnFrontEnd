<template>
  <div>
    创建对象
  </div>
</template>
<script>
export default {
  name: 'CreateObject',
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
    this.createObj()
  },
  destroyed() {},
  methods: {
    // factory mode
    createObj() {
      // 工厂函数
      function createPerson(name, age, job) {
        const obj = new Object()
        obj.name = name
        obj.age = age
        obj.job = job
        obj.sayName = function() {
          console.log(this.name)
        }
        return obj
      }
      console.log(createPerson('aaa', 12, 'student'))

      // 构造函数
      function Person(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
        this.sayName = function() {
          console.log(this.name)
        }
      }
      console.log(new Person('aaa', 24, 'fasdf'))

      // 原型模式
      function PersonProto() {}
      PersonProto.prototype.name = 'aaaa'
      PersonProto.prototype.sayName = function() {
        console.log(this.name)
      }
      console.log(new PersonProto())
      // 组合构造+原型
      function PersonFnProto(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
        this.friends = ['shelby', 'court']
      }
      PersonFnProto.prototype = {
        constructor: PersonFnProto,
        sayName: function() {
          console.log(this.name)
        }
      }
      console.log(new PersonFnProto('aaf', 23, 'fasdfa'))

      // 动态原型模式
      function PersonDynamic(name, age, job) {
        this.name = name
        this.age = age
        this.job = job

        if (typeof this.sayName !== 'function') {
          Person.prototype.sayName = function() {
            console.log(this.name)
          }
        }
      }
      console.log(new PersonDynamic('afasd', 23, 'fasdaf'))

      // 寄生模式
      console.log(new createPerson('aaaa', 13, 'fasd'))
    }
  }
}
</script>
<style scoped lang="scss"></style>
