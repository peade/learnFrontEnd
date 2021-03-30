class Circle {
  constructor(color) {
    this.color = color
  }
  setX(x) {
    this.x = x
  }
  setY(y) {
    this.y = y
  }
  setRadius(radius) {
    this.radius = radius
  }
  draw() {
    console.log(
      'Circle: Draw() [Color : ' +
        this.color +
        ', x : ' +
        this.x +
        ', y :' +
        this.y +
        ', radius :' +
        this.radius
    )
  }
}

export class ShapeFactory {
  static circleMap = new Map()
  static getCircle(color) {
    let circle = ShapeFactory.circleMap.get(color)
    if (!circle) {
      circle = new Circle(color)
      ShapeFactory.circleMap.set(color, circle)
      console.log('Creating circle of color　: ' + color)
    }
    return circle
  }
}

// export default ShapeFactory
