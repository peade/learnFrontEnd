<template>
  <div>Proxy Reflect</div>
</template>
<script>
export default {
  name: 'ProxyReflect',
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
    // this.proxyGet()
    // this.proxySet()
    // this.ownKeysDeleteProp()
    this.reflectGet()
  },
  destroyed() {},
  methods: {
    proxyGet() {
      const dictionary = {
        Hello: 'Hola',
        Bye: 'Adios'
      }
      const dict = new Proxy(dictionary, {
        // 拦截属性读取操作
        get(target, phrase) {
          // 如果有该键
          if (phrase in target) {
            return target[phrase]
          } else {
            return phrase
          }
        }
      })
      console.log(dict['Hello'])
      console.log(dict['welcome'])
    },
    proxySet() {
      const numbers = []
      const nums = new Proxy(numbers, {
        // 拦截写入属性操作
        set(target, prop, val) {
          if (typeof val === 'number') {
            target[prop] = val
            return true
          } else {
            return false
          }
        }
      })
      nums.push(1)
      nums.push(2)
      console.log('num lens is: ', nums.length)
      try {
        nums.push('fadf')
      } catch (e) {
        console.error(e)
      }
    },
    ownKeysDeleteProp() {
      const user = {
        name: 'John',
        _password: '***'
      }
      const newUser = new Proxy(user, {
        get(target, prop) {
          if (prop.startsWith('_')) {
            throw new Error('Access denied')
          }
          let value = target[prop]
          return typeof value === 'function' ? value.bind(target) : value
        },
        set(target, prop, val) {
          if (prop.startsWith('_')) {
            throw new Error('Access denied')
          }
          target[prop] = val
          return true
        },
        // 拦截删除
        deleteProperty(target, prop) {
          if (prop.startsWith('_')) {
            throw new Error('Access denied')
          }
          delete target[prop]
          return true
        },
        // 拦截读取属性列表
        ownKeys(target) {
          return Object.keys(target).filter(key => !key.startsWith('_'))
        }
      })
      console.info(user === newUser, newUser)
      try {
        console.log(newUser._password)
      } catch (e) {
        console.error(e)
      }
      try {
        newUser._password = 'test'
      } catch (e) {
        console.error(e)
      }
      try {
        delete newUser._password
      } catch (e) {
        console.error(e)
      }
      for (let key in newUser) {
        console.log(key)
      }
    },
    reflectGet() {
      const user = {
        _name: 'Guest',
        get name() {
          return this._name
        }
      }
      const userProxy = new Proxy(user, {
        // 现在 receiver 保留了对正确 this 的引用
        get(target, prop, receiver) {
          return Reflect.get(target, prop, receiver)
        }
      })
      const admin = {
        __proto__: userProxy,
        _name: 'admin'
      }
      console.log(admin.name)
    }
  }
}
</script>
<style scoped lang="scss"></style>
