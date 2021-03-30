class Keyboard {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this)
  }
}
class Monitor {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this)
  }
}
class Mouse {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this)
  }
}

export class Computer {
  constructor() {
    this.parts = [new Mouse(), new Keyboard(), new Monitor()]
  }
  accept(computerPartVisitor) {
    for (let i = 0; i < this.parts.length; i++) {
      this.parts[i].accept(computerPartVisitor)
    }
    computerPartVisitor.visit(this)
  }
}
export class ComputerPartDisplayVisitor {
  visit(device) {
    console.log(`Displaying ${device.constructor.name}.`)
  }
}
