<template>
  <div>
    <h4>备忘录模式(Memento Pattern)</h4>
    <p>
      备忘录模式在游戏中很好理解，你在某个时间存了一份自己觉得完美的存档，但你要试试看看再让它更完美一点自己会不会挂掉，而不幸的是你挂了。那么你翻存档的时候发现还有一个存档，通过存档就像时间倒流一样回到了那个游戏节点。备忘录模式就是做这个用途的。
    </p>
    <p>
      可以说在编程中需要时光倒流的某些事件的一种最佳实践，通过备忘录模式来做类似的事情。
    </p>
  </div>
</template>
<script>
import { Originator, CareTaker } from '@/util/memento'
export default {
  name: 'MementoPattern',
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
    const originator = new Originator()
    const careTaker = new CareTaker()
    originator.setState('State #1')
    originator.setState('State #2')
    careTaker.add(originator.saveStateToMemento())
    originator.setState('State #3')
    careTaker.add(originator.saveStateToMemento())
    originator.setState('State #4')
    console.log('Current State: ' + originator.getState())
    originator.getStateFromMemento(careTaker.get(0))
    console.log('First saved State: ' + originator.getState())
    originator.getStateFromMemento(careTaker.get(1))
    console.log('Second saved State: ' + originator.getState())
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
