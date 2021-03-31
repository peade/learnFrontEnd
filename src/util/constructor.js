/**
 * 产品类别： Car
 */
class Car {
  constructor() {
    this.name = ''
    this.number = ''
    this.wheel = ''
    this.engine = ''
  }
}
// 建造类
export class CarBuilder {
  constructor() {}
  nameBuilder(name = '很厉害的车') {
    this.name = name
  }
  numberBuilder(number = '888888') {
    this.number = number
  }
  wheelBuilder(wheel = '高级橡胶做的轮子') {
    this.wheel = wheel
  }
  engineBuilder(engine = '很厉害的引擎') {
    this.engine = engine
  }
  getCar() {
    const car = new Car()
    car.name = this.name
    car.number = this.number
    car.wheel = this.wheel
    car.engine = this.engine
    return car
  }
}

// 指挥类
export class Director {
  action(builder) {
    builder.nameBuilder()
    builder.numberBuilder()
    builder.wheelBuilder()
    builder.engineBuilder()
  }
}
