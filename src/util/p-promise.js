const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

export class PPromise {
  constructor(executor) {
    // 初始化状态
    this.status = PENDING
    // 将成功、失败结果放在this上，便于then, catch访问
    this.value = undefined
    this.reason = undefined
    // 成功状态回调函数队列
    this.onFulfilledCallbacks = []
    // 失败回调函数队列
    this.onRejectedCallbacks = []

    const resolve = value => {
      // 只有进行中的状态才能更改状态
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        // 成功回调依次执行
        this.onFulfilledCallbacks.forEach(fn => fn(this.vallue))
      }
    }
    const reject = reason => {
      // 只有进行中状态才能更改状态
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 失败回调依次执行
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      // 立即执行executor
      // 把内部的resolve和reject传入executor, 用户可以调用resolve和reject
      executor(resolve, reject)
    } catch (e) {
      // executor 执行出错，将错误内容reject抛出去
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
          }
    const self = this
    return new PPromise((resolve, reject) => {
      if (self.status === PENDING) {
        self.onFulfilledCallbacks.push(() => {
          try {
            // 模拟微任务
            setTimeout(() => {
              const result = onFulfilled(self.valule)
              // 分两种情况：
              // 1. 回调函数返回值是Promise，执行then操作
              // 2. 如果不是Promise，调用新Promise的resolve函数
              result instanceof PPromise
                ? result.then(resolve, reject)
                : resolve(result)
            })
          } catch (e) {
            reject(e)
          }
        })
        self.onRejectedCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onRejected(self.reason)
              // 不同点：此时是reject
              result instanceof PPromise
                ? result.then(resolve, reject)
                : reject(result)
            })
          } catch (e) {
            reject(e)
          }
        })
      } else if (self.status === FULFILLED) {
        try {
          setTimeout(() => {
            const result = onFulfilled(self.value)
            result instanceof PPromise
              ? result.then(resolve, reject)
              : resolve(result)
          })
        } catch (e) {
          reject(e)
        }
      } else if (self.status === REJECTED) {
        try {
          setTimeout(() => {
            const result = onRejected(self.reason)
            result instanceof PPromise
              ? result.then(resolve, reject)
              : reject(result)
          })
        } catch (e) {
          reject(e)
        }
      }
    })
  }
  catch(onRejected) {
    return this.then(null, onRejected)
  }
  static resolve(value) {
    if (value instanceof PPromise) {
      // 如果是Promise实例，直接返回
      return value
    } else {
      // 如果不是Promise实例，返回一个新的Promise对象，状态为FULFILLED
      return new PPromise(resolve => resolve(value))
    }
  }
  static reject(reason) {
    return new PPromise((resolve, reject) => {
      reject(reason)
    })
  }
}
