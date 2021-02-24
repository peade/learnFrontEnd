<template>
  <div></div>
</template>
<script>
export default {
  name: 'ProtoInherit',
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
    this.protoLink()

    this.ctorFn()

    this.compInherit()
  },
  destroyed() {},
  methods: {
    // 原型链继承
    protoLink() {
      function Parent() {
        this.isShow = true
        this.info = {
          name: 'abc',
          age: 18
        }
      }
      Parent.prototype.getInfo = function() {
        console.log(this.info)
        console.log(this.isShow)
      }
      function Child() {}
      Child.prototype = new Parent()
      let Child1 = new Child()
      Child1.info.gender = '男'
      Child1.getInfo() // {name: "yhd", age: 18, gender: "男"}

      let child2 = new Child()
      child2.getInfo() // {name: "yhd", age: 18, gender: "男"}
      child2.isShow = false

      console.log(child2.isShow) // false
    },
    // 构造函数继承
    ctorFn() {
      function Parent() {
        this.info = {
          name: 'aaa',
          age: 19
        }
      }
      function Child() {
        Parent.call(this)
      }
      let child1 = new Child()
      child1.info.gender = '男'
      console.log(child1.info) // {name: "yhd", age: 19, gender: "男"};

      let child2 = new Child()
      console.log(child2.info) // {name: "yhd", age: 19}
    },
    // 组合继承: 构造函数方式和原型方式
    compInherit() {
      function Parent(name) {
        this.name = name
        this.colors = ['red', 'blue', 'yellow']
      }
      Parent.prototype.sayName = function() {
        console.log(this.name)
      }
      function Child(name, age) {
        // 继承父类属性
        Parent.call(this, name)
        this.age = age
      }
      // 继承父类方法
      Child.prototype = new Parent()
      Child.prototype.sayAge = function() {
        console.log(this.age)
      }

      let child1 = new Child('yhd', 19)
      child1.colors.push('pink')
      console.log(child1.colors) // ["red", "blue", "yellow", "pink"]
      child1.sayAge() // 19
      child1.sayName() // "yhd"

      let child2 = new Child('wxb', 30)
      console.log(child2.colors) // ["red", "blue", "yellow"]
      child2.sayAge() // 30
      child2.sayName() // "wxb"
    },
    // 原型式继承
    protoStyle() {
      function objectCopy(obj) {
        function Fun() {}
        Fun.prototype = obj
        return new Fun()
      }
      let person = {
        name: 'yhd',
        age: 18,
        friends: ['jack', 'tom', 'rose'],
        sayName: function() {
          console.log(this.name)
        }
      }

      let person1 = objectCopy(person)
      person1.name = 'wxb'
      person1.friends.push('lily')
      person1.sayName() // wxb

      let person2 = objectCopy(person)
      person2.name = 'gsr'
      person2.friends.push('kobe')
      person2.sayName() // "gsr"

      console.log(person.friends) // ["jack", "tom", "rose", "lily", "kobe"]
    }
  }
}
</script>
<style scoped lang="scss"></style>
