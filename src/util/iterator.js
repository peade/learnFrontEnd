class NameIterator {
  constructor(names = []) {
    this.index = 0
    this.names = names
  }
  hasNext() {
    if (this.index < this.names.length) {
      return true
    }
    return false
  }
  next() {
    if (this.hasNext()) {
      return this.names[this.index++]
    }
    return null
  }
}

export class NameRepository {
  constructor() {
    this.names = ['Robert', 'John', 'Julie', 'Lora']
  }
  getIterator() {
    const names = this.names
    return new NameIterator(names)
  }
}

export class NameRepositoryEs6 {
  constructor() {
    this.names = ['Robert', 'John', 'Julie', 'Lora']
    this.index = 0
  }
  [Symbol.iterator]() {
    return {
      next: () => {
        const done = this.index < this.names.length ? false : true
        return { value: this.names[this.index++], done }
      }
    }
  }
}
