<template>
  <div>learn class</div>
</template>
<script>
export default {
  name: 'LearnClass',
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
    this.demo()
    this.extendClass()
    this.classMixin()
  },
  destroyed() {},
  methods: {
    demo() {
      class First {
        a = 1
        log() {
          console.log(this.a)
        }
      }

      const f = new First()
      f.log()
    },
    extendClass() {
      class Animal {
        constructor(name) {
          this.name = name
        }
        speak() {
          console.log(`the name is ${this.name}`)
        }
      }
      class Rabbit extends Animal {
        constructor(name, age) {
          super(name)
          this.age = age
        }
        speak() {
          super.speak()
          console.log(`the age is ${this.age}`)
        }
      }

      const rabbit = new Rabbit('hh', 15)
      rabbit.speak()
    },
    classMixin() {
      const sayHiMixin = {
        sayHi() {
          console.log(`hi ${this.name}`)
        },
        sayBye() {
          console.log(`bye ${this.name}`)
        }
      }
      class User {
        constructor(name) {
          this.name = name
        }
      }
      // 拷贝方法
      Object.assign(User.prototype, sayHiMixin)

      const user = new User('Dude')
      user.sayHi()
    }
  }
}
</script>
<style scoped lang="scss"></style>
