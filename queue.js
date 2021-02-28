// 有序队列
class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority || 0
  }
}

class Queue {
  constructor() {
    this.items = []
  }
  push(value, priority) {
    const node = new Node(value, priority)
    this.items.push(node)
  }
  pop() {
    if (this.items.length === 0) {
      return undefined
    }
    let maxIndex = 0
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > this.items[maxIndex].priority) {
        maxIndex = i
      }
    }
    const result = this.items[maxIndex].value
    this.items.splice(maxIndex, 1)
    return result
  }
}

const q = new Queue()
q.push(1, 1)
q.push(2, 10)
q.push(3, 100)
q.push(4)
q.push(5)
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
