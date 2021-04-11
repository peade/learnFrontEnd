export class Shape {
  constructor() {
    this.id = null
    this.type = null
  }
  getType() {
    return this.type
  }
  getId() {
    return this.id
  }
  setId(id) {
    this.id = id
  }
  clone() {
    const clone = {}
    clone.__proto__ = this.__proto__
    this.__proto__.constructor.call(clone)
    return clone
  }
}

function Rectangle() {
  this.type = 'Rectangle'
}
Rectangle.prototype.__proto__ = new Shape()
Rectangle.prototype.draw = function() {
  console.log("I'm a rectangle")
}

function Square() {
  this.type = 'Rectangle'
}
Square.prototype.__proto__ = new Shape()
Square.prototype.draw = function() {
  console.log("I'm a Square")
}
function Circle() {
  this.type = 'Circle'
}
Circle.prototype.__proto__ = new Shape()
Circle.prototype.draw = function() {
  console.log("I'm a Circle")
}

export class ShapeCache {
  static getShape(shapeId) {
    const cachedShape = ShapeCache.shapeMap.get(shapeId)
    return cachedShape.clone()
  }
  static loadCache() {
    const circle = new Circle()
    circle.setId('1')
    ShapeCache.shapeMap.set(circle.getId(), circle)
    const square = new Square()
    square.setId('2')
    ShapeCache.shapeMap.set(square.getId(), square)
    const rectangle = new Rectangle()
    rectangle.setId('3')
    ShapeCache.shapeMap.set(rectangle.getId(), rectangle)
  }
}
ShapeCache.shapeMap = new Map()
