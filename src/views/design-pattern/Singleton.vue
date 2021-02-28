<template>
  <div>
    <h2>单例</h2>
    <p>
      单例：单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
    </p>
    <p>
      单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器中的window对象等。
    </p>
  </div>
</template>
<script>
export default {
  name: 'Singleton',
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
    this.single()
  },
  destroyed() {},
  methods: {
    single() {
      const singleton = function(name) {
        this.name = name
        this.instance = null
      }
      singleton.prototype.getName = function() {
        console.log(this.name)
      }
      singleton.getInstance = function(name) {
        if (!this.instance) {
          this.instance = new singleton(name)
        }
        return this.instance
      }
      const a = singleton.getInstance('aaaa')
      const b = singleton.getInstance('bbbb')
      console.log(a === b)
    }
  }
}
</script>
<style scoped lang="scss"></style>
