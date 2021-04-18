class TerminalExpression {
  constructor(data) {
    this.data = data
  }
  interpret(context) {
    if (context.indexOf(this.data) > -1) {
      return true
    }
    return false
  }
}

class OrExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1
    this.expr2 = expr2
  }
  interpret(context) {
    return this.expr1.interpret(context) || this.expr2.interpret(context)
  }
}

class AndExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1
    this.expr2 = expr2
  }
  interpret(context) {
    return this.expr1.interpret(context) && this.expr2.interpret(context)
  }
}
// 获取对应表达式
export function getMaleExpression() {
  const robert = new TerminalExpression('Robert')
  const john = new TerminalExpression('John')
  return new OrExpression(robert, john)
}
export function getMarriedWomanExpression() {
  const julie = new TerminalExpression('Julie')
  const married = new TerminalExpression('Married')
  return new AndExpression(julie, married)
}
