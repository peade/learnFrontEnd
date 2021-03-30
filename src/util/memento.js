class Memento {
  constructor(state) {
    this.state = state
  }
  getState() {
    return this.state
  }
}
export class Originator {
  setState(state) {
    this.state = state
  }
  getState() {
    return this.state
  }
  saveStateToMemento() {
    return new Memento(this.state)
  }
  getStateFromMemento(memento) {
    this.state = memento.getState()
  }
}

export class CareTaker {
  constructor() {
    this.mementoList = []
  }
  add(state) {
    this.mementoList.push(state)
  }
  get(index) {
    return this.mementoList[index]
  }
}
