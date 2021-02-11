<template>
  <div>learn object</div>
</template>
<script>
export default {
  name: 'LearnObject',
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
    this.defineProp()
    this.getSet()
  },
  destroyed() {},
  methods: {
    defineProp() {
      const user = {}
      Object.defineProperty(user, 'name', {
        value: 'John',
        enumerable: true,
        configurable: true,
        writable: true
      })
      console.log(user.name)
      user.name = 'Pete'
    },
    getSet() {
      const user = { name: 'John', surname: 'Smith' }
      Object.defineProperty(user, 'fullName', {
        get() {
          return `${this.name} ${this.surname}`
        },
        set(value) {
          ;[this.name, this.surname] = value.split(' ')
        }
      })
      console.log(user.fullName)
      user.fullName = 'first second'
      for (let k in user) {
        console.log(k, user[k])
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
