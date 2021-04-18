<template>
  <div>
    <h4>命令模式</h4>
    <p>
      顾名思义，这是一种接受命令再统一执行的模式。
    </p>
    <p>
      由于命令模式是最终执行，所以中途可以发出很多不同的命令，能解决一些比如预约的问题。就比如上面的例子，股票可以提前下单，但是未必能最终生效。同时可以让代码展现更加直观和参数化。
    </p>
  </div>
</template>
<script>
import { Stock, BuyStock, SellStock, Broker } from '@/util/command'
export default {
  name: 'CommandPattern',
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
    const abcStock = new Stock()
    const buyStockOrder = new BuyStock(abcStock)
    const sellStockOrder = new SellStock(abcStock)
    const broker = new Broker()
    broker.takeOrder(buyStockOrder)
    broker.takeOrder(buyStockOrder)
    broker.takeOrder(buyStockOrder)
    broker.takeOrder(sellStockOrder)
    broker.takeOrder(sellStockOrder)
    broker.placeOrders()
  },
  destroyed() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
