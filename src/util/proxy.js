class RealImage {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDist(fileName)
  }
  display() {
    console.log(`Displaying ` + this.fileName)
  }
  loadFromDist(fileName) {
    console.log('Loading ' + fileName)
  }
}

export class ProxyImage {
  constructor(fileName) {
    this.fileName = fileName
    this.realImage = null
  }
  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.fileName)
    }
    this.realImage.display()
  }
}
