// https://juejin.im/post/5afd2ff26fb9a07aaa11786c#heading-0
export class SimplePromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    let resolve = value => {
      if (this.status === 'pending') {
        this.value = value
        this.status = 'resolved'
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.reason = reason
        this.status = 'rejected'
      }
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    if (this.status === 'resolved') {
      onFulfilled(this.value)
    }
    if (this.status === 'rejected') {
      onRejected(this.reason)
    }
  }
}
function handlePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('circular reference'))
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) {
              return
            }
            called = true
            handlePromise(promise2, y, resolve, reject)
          },
          r => {
            if (called) {
              return
            }
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) {
        return
      }
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
export class PeaPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.successStore = []
    this.failStore = []

    let resolve = value => {
      if (this.status === 'pending') {
        this.value = value
        this.status = 'resolved'
        this.successStore.forEach(fn => fn())
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.reason = reason
        this.status = 'rejected'
        this.failStore.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : y => y
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : err => {
            throw err
          }
    let promise2
    if (this.status === 'resolved') {
      promise2 = new PeaPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            handlePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }
    if (this.status === 'rejected') {
      promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            handlePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }

    if (this.status === 'pending') {
      promise2 = new PeaPromise((resolve, reject) => {
        this.successStore.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              handlePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
        this.failStore.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              handlePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      })
    }
    return promise2
  }
}

PeaPromise.all = function(promiseArrs) {
  return new PeaPromise((resolve, reject) => {
    let arr = []
    let i = 0
    function processData(index, data) {
      arr[index] = data
      i++
      if (i === promiseArrs.length) {
        resolve(arr)
      }
    }
    for (let i = 0; i < promiseArrs.length; i++) {
      promiseArrs[i].then(data => {
        processData(i, data)
      }, reject)
    }
  })
}

PeaPromise.race = function(promises) {
  return new PeaPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

PeaPromise.deferred = PeaPromise.defer = function() {
  let dfd = {}
  dfd.promise = new PeaPromise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
// export default PeaPromise
