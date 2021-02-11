<template>
  <div>prototype</div>
</template>
<script>
export default {
  name: 'Proto',
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
  methods: {
    protoMulti() {
      const animal = {
        book: 1,
        eat() {
          this.full = true
        },
        setBook(num) {
          this.book = num
        }
      }
      const rabbit = {
        __proto__: animal
      }
      const dog = {
        __proto__: animal
      }
      rabbit.setBook(2)
      console.log(rabbit.book, dog.book)
    },
    protoTp() {
      let animal = {
        eats: true
      }
      function Rabbit(name) {
        this.name = name
      }
      Rabbit.prototype = animal
      let rabbit = new Rabbit('White Rabbit') //  rabbit.__proto__ == animal
      let rab = new Rabbit('black')
      // rabbit.__proto__.eats = false
      console.log(rabbit.eats, rab.eats) // true
    },
    ctor() {
      console.log('constructor')
      function Rabbit() {}
      let rabbit = new Rabbit() // inherits from {constructor: Rabbit}
      console.log(rabbit.constructor == Rabbit) // true (from prototype)
      let rabbit1 = new Rabbit('White Rabbit')
      let rabbit2 = new rabbit.constructor('Black Rabbit')
      console.log(rabbit1, rabbit2)
      // change constructor
      Rabbit.prototype = {
        jumps: true,
        constructor: Rabbit
      }
    },
    protoPart01() {
      console.log('------learn prototype-------')
      const anotherObject = { a: 2 }
      const myObject = Object.create(anotherObject)
      console.log(myObject.a)
      for (let k in myObject) {
        console.log(k)
      }
      myObject.a++
      console.log(myObject.a, anotherObject.a, myObject)

      function Foo(name) {
        this.name = name
      }
      Foo.prototype.constructor === Foo
      Foo.prototype.myName = function() {
        return this.name
      }
      const f = new Foo()
      console.log(
        'Object.getPrototypeOf( f ) === Foo.prototype',
        Object.getPrototypeOf(f) === Foo.prototype
      )
      console.log('f.constructor === Foo', f.constructor === Foo)

      const a = new Foo('a')
      const b = new Foo('b')
      console.log(a.myName(), b.myName())
    },
    protoPart02() {
      function Foo(name) {
        this.name = name
      }
      Foo.prototype.myName = function() {
        return this.name
      }

      function Bar(name, label) {
        Foo.call(this, name)
        this.label = label
      }
      // 创建一个新得Bar.prototype 对象，并关联到Foo.prototype
      Bar.prototype = Object.create(Foo.prototype) // 没有Bar.prototype.constructor, 如果需要，则需要手动进行修复

      // es6 的写法
      Object.setPrototypeOf(Bar.prototype, Foo.prototype)

      Bar.prototype.myLabel = function() {
        return this.label
      }

      const a = new Bar('a', 'obj a')
      console.log(a.myName(), a.myLabel())
    },
    objCreatePolyfill() {
      if (!Object.create) {
        Object.create = function(o) {
          function F() {}
          F.prototype = o
          return new F()
        }
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
