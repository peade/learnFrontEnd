class Customer {
  constructor(name) {
    this.name = name
  }
  getName() {}
  isNil() {}
}

class RealCustomer extends Customer {
  getName() {
    return this.name
  }
  isNil() {
    return false
  }
}

class NullCustomer extends Customer {
  getName() {
    return 'Not Available in Customer Database'
  }
  isNil() {
    return true
  }
}

export class CustomerFactory {
  // es7 静态属性
  static names = ['Rob', 'Joe', 'Julie']
  static getCustomer(name) {
    for (let i = 0; i < CustomerFactory.names.length; i++) {
      if (CustomerFactory.names[i].toUpperCase() === name.toUpperCase()) {
        return new RealCustomer(name)
      }
    }
    return new NullCustomer()
  }
}
