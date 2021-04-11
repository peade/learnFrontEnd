class Rectangle {
  draw() {
    console.log('Rectangle::draw()')
  }
}

class Square {
  draw() {
    console.log('Square::draw()')
  }
}

class Circle {
  draw() {
    console.log('Circle::draw()')
  }
}

export class ShapeMaker {
  constructor() {
    this.circle = new Circle()
    this.rectangle = new Rectangle()
    this.square = new Square()
  }

  drawCircle() {
    this.circle.draw()
  }
  drawRectangle() {
    this.rectangle.draw()
  }
  drawSquare() {
    this.square.draw()
  }
}
