class DependentObject1 {
  setData(data) {
    this.data = data
  }
  getData() {
    return this.data
  }
}

class DependentObject2 {
  setData(data) {
    this.data = data
  }
  getData() {
    return this.data
  }
}
// 粗颗粒度组合
export class CoarseGrainedObject {
  constructor() {
    this.do1 = new DependentObject1()
    this.do2 = new DependentObject2()
  }
  setData(data1, data2) {
    this.do1.setData(data1)
    this.do2.setData(data2)
  }
  getData() {
    return [this.do1.getData(), this.do2.getData()]
  }
}
// 组合实体
export class CompositeEntity {
  constructor() {
    this.cgo = new CoarseGrainedObject()
  }
  setData(data1, data2) {
    this.cgo.setData(data1, data2)
  }
  getData() {
    return this.cgo.getData()
  }
}

export class Client {
  constructor() {
    this.compositeEntity = new CompositeEntity()
  }
  printData() {
    for (let i = 0; i < this.compositeEntity.getData().length; i++) {
      console.log('Data: ' + this.compositeEntity.getData()[i])
    }
  }
  setData(data1, data2) {
    this.compositeEntity.setData(data1, data2)
  }
}
