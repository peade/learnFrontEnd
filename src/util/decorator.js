export class Rectangle {
  draw() {
    console.log(`shape: Rectangle`)
  }
}

export class Circle {
  draw() {
    console.log(`Shae: Circle`)
  }
}

export class RedShapeDecorator {
  constructor(decoratedShape) {
    this.decoratedShape = decoratedShape
  }
  draw() {
    this.decoratedShape.draw()
    this.setRedBorder()
  }
  setRedBorder() {
    console.log('Border Color: Red')
  }
}
