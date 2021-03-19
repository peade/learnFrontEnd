const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

export class PeaPromise {
  constructor(executor) {
    this.status = STATUS.PENDING
    this.value = null
    this.resolveQueue = []
    this.rejectQueue = []

    const resolve = value => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.FULFILLED
        this.value = value
        while (this.resolveQueue.length) {
          const callback = this.rejectQueue.shift()
          callback(value)
        }
      }
    }
    const reject = error => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.REJECTED
        this.value = error
        while (this.rejectQueue.length) {
          const callback = this.rejectQueue.shift()
          callback(error)
        }
      }
    }

    executor(resolve, reject)
  }
  then(onResolve, onReject) {
    if (typeof onResolve !== 'function') {
      onResolve = value => value
    }
    if (typeof onReject !== 'function') {
      onReject = error => error
    }
    return new PeaPromise((resolve, reject) => {
      const resovleFn = value => {
        const res = onResolve(value)
        try {
          res instanceof PeaPromise ? res.then(resolve, reject) : resolve(value)
        } catch (e) {
          reject(e)
        }
      }
      const rejectFn = error => {
        try {
          const res = onReject(error)
          res instanceof PeaPromise ? res.then(resolve, reject) : resolve(error)
        } catch (e) {
          reject(e)
        }
      }
      switch (this.status) {
        case STATUS.PENDING:
          this.resolveQueue.push(resovleFn)
          this.rejectQueue.push(rejectFn)
          break
        case STATUS.FULFILLED:
          resovleFn(this.vallue)
          break
        case STATUS.REJECTED:
          rejectFn(this.value)
          break
      }
    })
  }
}
