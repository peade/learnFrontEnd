<template>
  <div>
    <h4>责任链模式(Chain of Responsibility Pattern)</h4>
    <p>
      这是一种链式结构的一种设计模式，比如如果当前类有义务要做某项事情的时候就必须要去完成
    </p>
    <p>
      当前责任人只需要关心自己应该尽什么责任，而不是要关心，自己完成责任后而发什么的其它的什么责任。避免了发送者和多个接受者耦合在一起。
    </p>
  </div>
</template>
<script>
import { getChainOfLoggers, AbstractLogger } from '@/util/chain-responsibility'
export default {
  name: 'ChainOfResponsibilityPattern',
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
    const loggerChain = getChainOfLoggers()
    console.log(loggerChain)
    // 实现级别高的报错依次从当前级别输出到低级别
    loggerChain.logMessage(AbstractLogger.INFO, 'This is an information.')

    loggerChain.logMessage(
      AbstractLogger.DEBUG,
      'This is a debug level information.'
    )

    loggerChain.logMessage(
      AbstractLogger.ERROR,
      'This is an error information.'
    )
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
