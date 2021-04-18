export class OperationAdd {
  doOperation(num1, num2) {
    return num1 + num2
  }
}
export class OperationSubstract {
  doOperation(num1, num2) {
    return num1 - num2
  }
}
export class OperationMultiply {
  doOperation(num1, num2) {
    return num1 * num2
  }
}

export class Context {
  constructor(strategy) {
    this.strategy = strategy
  }
  executeStrategy(num1, num2) {
    return this.strategy.doOperation(num1, num2)
  }
}
