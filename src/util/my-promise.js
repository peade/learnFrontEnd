const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

export class MyPromise {
  // 构造函数接收一个执行回调
  constructor(executor) {
    this._status = STATUS.PENDING // Promise 初始状态
    this._value = undefined // then 回调的值
    this._resolveQueue = [] // resolve触发的成功队列
    this._rejectQueue = [] // reject时触发的队列

    // 使用箭头函数固定this (resolve函数在executor中触发，不然找不到this)
    const resolve = value => {
      const run = () => {
        // Promise/A+ 规范规定的Promise状态只能从pending触发，变成fulfilled
        if (this._status === STATUS.PENDING) {
          this._status = STATUS.FULFILLED // 更改状态
          this._value = value // 储存当前值，用于then回调
          // 执行resolve回调
          while (this._resolveQueue.length) {
            const callback = this._resolveQueue.shift()
            callback(value)
          }
        }
      }
      // 把resolve 执行回调的操作封装成一个函数，放进setTimeout里，以实现promise异步调用的特性
      setTimeout(run)
    }
    // 同resolve
    const reject = value => {
      const run = () => {
        if (this._status === STATUS.PENDING) {
          this._status = STATUS.REJECTED
          this._value = value
          while (this._rejectQueue.length) {
            const callback = this._rejectQueue.shift()
            callback(value)
          }
        }
      }
      setTimeout(run)
    }
    // new Promise()时，立即执行executor,并传入resolve和reject
    executor(resolve, reject)
  }
  // then 方法， 接收一个成功回调和一个失败回调
  then(onFulfilled, onRejected) {
    // 根据规范，如果then的参数不是function, 则忽略它，让值继续往下传递，链式调用继续往下执行
    typeof onFulfilled !== 'function' ? (onFulfilled = value => value) : null
    typeof onRejected !== 'function' ? (onRejected = error => error) : null

    // 返回一个新的promise
    return new MyPromise((resolve, reject) => {
      const resolveFn = value => {
        try {
          const x = onFulfilled(value)
          // 分类讨论返回值，如果是Promise,那么等待promise状态变更，否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      const rejectFn = error => {
        try {
          const x = onRejected(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      switch (this._status) {
        case STATUS.PENDING:
          this._resolveQueue.push(resolveFn)
          this._rejectQueue.push(rejectFn)
          break
        case STATUS.FULFILLED:
          resolveFn(this._value)
          break
        case STATUS.REJECTED:
          rejectFn(this._value)
          break
      }
    })
  }

  catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      error => {
        MyPromise.resolve(callback()).then(() => error)
      }
    )
  }
  // 静态resolve 方法
  static resolve(value) {
    return value instanceof MyPromise
      ? value
      : new Promise(resolve => resolve(value))
  }
  //静态reject方法
  static reject(error) {
    return new MyPromise((resolve, reject) => reject(error))
  }
  // 静态all方法
  static all(promiseArr) {
    let count = 0
    let result = []
    return new MyPromise((resolve, reject) => {
      if (!promiseArr.length) {
        return resolve(result)
      }
      promiseArr.forEach((p, i) => {
        MyPromise.resolve(p).then(
          value => {
            count++
            result[i] = value
            if (count === promiseArr.length) {
              resolve(result)
            }
          },
          error => {
            reject(error)
          }
        )
      })
    })
  }
  // 静态race方法
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach(p => {
        MyPromise.resolve(p).then(
          value => {
            resolve(value)
          },
          error => {
            reject(error)
          }
        )
      })
    })
  }
}
