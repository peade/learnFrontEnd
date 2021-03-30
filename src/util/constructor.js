// 纸盒
class Wrapper {
  pack() {
    return 'Wrapper'
  }
}
// 瓶子
class Bottle {
  pack() {
    return 'Bottle'
  }
}
// 汉堡需要纸盒包住
class Burger {
  packing() {
    return new Wrapper()
  }
}
// 冷饮需要瓶子装
class ColdDrink {
  packing() {
    return new Bottle()
  }
}

// 蔬菜汉堡
class VegBurger extends Burger {
  price() {
    return 25.0
  }
  name() {
    return 'Veg Burger'
  }
}
// 肌肉汉堡
class ChickenBurger extends Burger {
  price() {
    return 50.5
  }
  name() {
    return 'Chicken Burger'
  }
}
// 可乐
class Coke extends ColdDrink {
  price() {
    return 30.0
  }
  name() {
    return 'Coke'
  }
}
// 百事
class Pepsi extends ColdDrink {
  price() {
    return 35.0
  }
  name() {
    return 'Pepsi'
  }
}

class Meal {
  constructor() {
    const items = []
    Reflect.defineProperty(this, 'items', {
      get: () => {
        if (this.__proto__ !== Meal.prototype) {
          throw new Error('items is private!')
        }
        return items
      }
    })
  }
  addItem(item) {
    this[this.itemsName].push(item)
  }
  getCost() {
    let cost = 0.0
    for (const item of this[this.itemsName]) {
      cost += item.price()
    }
    return cost
  }
  showItems() {
    for (const item of this[this.itemsName]) {
      const nameStr = 'Item : ' + item.name()
      const packStr = 'Packing : ' + item.packing().pack()
      const priceStr = 'Price : ' + item.price()
      console.log(`${nameStr},${packStr},${priceStr}`)
    }
  }
}
export class MealBuilder {
  prepareVegMeal() {
    const meal = new Meal()
    meal.addItem(new VegBurger())
    meal.addItem(new Coke())
    return meal
  }
  prepareNonVegMeal() {
    const meal = new Meal()
    meal.addItem(new ChickenBurger())
    meal.addItem(new Pepsi())
    return meal
  }
}
