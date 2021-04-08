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
    console.log(shapeType)
    switch (shapeType) {
      case 'CIRCLE':
        return new Circle()
      case 'RECTANGLE':
        return new Rectangle()
      case 'SQUARE':
        return new Square()
      default:
        return null
    }
  }
}

class Red {
  fill() {
    console.log('fill red')
  }
}

class Blue {
  fill() {
    console.log('fill blue')
  }
}

class Green {
  fill() {
    console.log('fill green')
  }
}

export class ColorFactory {
  getColor(color) {
    switch (color) {
      case 'RED':
        return new Red()
      case 'BLUE':
        return new Blue()
      case 'GREEN':
        return new Green()
      default:
        return null
    }
  }
}

// 抽象工厂
export class FactoryProducer {
  static getFactory(choice) {
    switch (choice) {
      case 'SHAPE':
        return new ShapeFactory()
      case 'COLOR':
        return new ColorFactory()
      default:
        return null
    }
  }
}
