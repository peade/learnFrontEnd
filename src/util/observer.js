export class Subject {
  constructor() {
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  attach(observer) {
    this.observers.push(observer)
  }
  notifyAllObservers() {
    for (const observer of this.observers) {
      observer.update()
    }
  }
}

export class BinaryObserver {
  constructor(subject) {
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log('Binary String: ' + this.subject.getState().toString(2))
  }
}
export class OctalObserver {
  constructor(subject) {
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log('Octal String: ' + this.subject.getState().toString(8))
  }
}
export class HexObserver {
  constructor(subject) {
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log('Hex String: ' + this.subject.getState().toString(16))
  }
}
