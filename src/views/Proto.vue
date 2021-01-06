<template>
  <div></div>
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
  mounted() {
    this.protoMulti()
    this.protoTp()
    this.ctor()
  },
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
    }
  }
}
</script>
<style scoped lang="scss"></style>
