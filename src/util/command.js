export class Stock {
  constructor() {
    this.name = 'ABC'
    this.quantity = 10
  }
  buy() {
    console.log(
      'Stock [ Name: ' + this.name + ',Quantity: ' + this.quantity + ' ] bought'
    )
  }
  sell() {
    console.log(
      'Stock [ Name: ' + this.name + ',Quantity: ' + this.quantity + ' ] sold'
    )
  }
}

export class BuyStock {
  constructor(abcStock) {
    this.abcStock = abcStock
  }
  execute() {
    this.abcStock.buy()
  }
}
export class SellStock {
  constructor(abcStock) {
    this.abcStock = abcStock
  }
  execute() {
    this.abcStock.sell()
  }
}

export class Broker {
  constructor() {
    this.orderList = []
  }
  takeOrder(order) {
    this.orderList.push(order)
  }
  placeOrders() {
    for (const order of this.orderList) {
      order.execute()
    }
    this.orderList = []
  }
}
