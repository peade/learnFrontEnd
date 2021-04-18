export class StartState {
  doAction(context) {
    console.log(`Player is in start state`)
    context.setState(this)
  }
  toString() {
    return `start state`
  }
}
export class StopState {
  doActon(context) {
    console.log(`Player is in stop state`)
    context.setState(this)
  }
  toString() {
    return `Stop State`
  }
}

export class Context {
  constructor() {
    this.state = null
  }
  setState(state) {
    this.state = state
  }
  getState() {
    return this.state.toString()
  }
}
