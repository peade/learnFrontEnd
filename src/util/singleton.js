export class SingleObject {
  constructor() {
    // 防止调用new初始化
    if (new.target !== undefined) {
      const errorMsg = "This is single object,Can't use keyword new!"
      const tipMsg = 'You should use method getInstance to get instance。'
      throw new Error(`${errorMsg}\n${tipMsg}`)
    }
  }
  static getInstance() {
    // 生产单例
    if (SingleObject.instance) {
      return SingleObject.instance
    }
    SingleObject.instance = {}
    SingleObject.instance.__proto__ = SingleObject.prototype
    return SingleObject.instance
  }
  showMessage() {
    console.log('Hello World')
  }
}
