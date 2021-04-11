export class RedCircle {
  drawCircle(radius, x, y) {
    console.log(
      'Drawing Circle[ color: red, radius: ' +
        radius +
        ', x: ' +
        x +
        ', ' +
        y +
        ']'
    )
  }
}

export class GreenCircle {
  drawCircle(radius, x, y) {
    console.log(
      'Drawing Circle[ color: green, radius: ' +
        radius +
        ', x: ' +
        x +
        ', ' +
        y +
        ']'
    )
  }
}

class Shape {
  constructor(drawAPI) {
    if (new.target === Shape) {
      throw new Error('this class must be extends.')
    }
    this.drawAPI = drawAPI
  }
  draw() {}
}

export class Circle extends Shape {
  constructor(x, y, radius, drawAPI) {
    super(drawAPI)
    this.x = x
    this.y = y
    this.radius = radius
  }
  draw() {
    this.drawAPI.drawCircle(this.radius, this.x, this.y)
  }
}
