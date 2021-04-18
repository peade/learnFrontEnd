<template>
  <div>
    <h4>观察者模式(Observer Pattern)</h4>
    <p>
      当一个对象和另外几个对象产生关联的时候，当这个对象发生改变的时候实现通知对应对象变更。
    </p>
    <p>
      对于对象和对象的关系中，可以通过这种方式来降低耦合，同时在代码的使用上也更加直观。
    </p>
  </div>
</template>
<script>
import {
  Subject,
  BinaryObserver,
  OctalObserver,
  HexObserver
} from '@/util/observer'
export default {
  name: 'ObserverPattern',
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
    const subject = new Subject()
    new HexObserver(subject)
    new OctalObserver(subject)
    new BinaryObserver(subject)
    console.log('First state change: 15')
    subject.setState(15)
    console.log('Second state change: 10')
    subject.setState(10)
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
