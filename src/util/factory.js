class Circle {
  draw() {
    console.log("I'm a circle")
  }
}

class Rectangle {
  draw() {
    console.log("I'm a rectangle")
  }
}

class Square {
  draw() {
    console.log("I'm a square")
  }
}

export class ShapeFactory {
  getShape(shapeType) {
    switch (shapeType) {
      case 'CIRCLE':
        return new Circle()
      case 'RECTANGEL':
        return new Rectangle()
      case 'SQUARE':
        return new Square()
      default:
        return null
    }
  }
}
