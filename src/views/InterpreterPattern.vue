<template>
  <div>
    <h4>解释器模式（Interpreter Pattern）</h4>
    <p>
      解释器模式提供了对语言或语法的的一些判断方式。
    </p>
    <p>
      通过单一断言判断来组合出一些断言的提升。比如在解析二进制表达式断言的判断，只需要区分是否存在左表达式或右表达式，而不需要关心左表达式中是否还有左右表达式或右表达式中是否还有左右表达式，最后通过组合提升的方式，来解析整个二进制表达式。
    </p>
  </div>
</template>
<script>
import {
  getMaleExpression,
  getMarriedWomanExpression
} from '@/util/interpreter'
export default {
  name: 'InterpreterPattern',
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
    const isMale = getMaleExpression()
    const isMarriedWoman = getMarriedWomanExpression()
    console.log('John is male? ' + isMale.interpret('John'))
    console.log(
      'Julie is a married women? ' + isMarriedWoman.interpret('Married Julie')
    )
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
