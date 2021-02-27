import {
  Node,
  defaultEquals,
  Compare,
  defaultCompare
} from '@/util/data-structure'

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }
  push(element) {
    const node = new Node(element)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 移除第一项
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        // previous与current的下一项链接起来，跳过current，从而移除它
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.size() && current; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count
  }
  getHead() {
    return this.head
  }
  clear() {
    this.head = null
    this.count = 0
  }
  toString() {
    if (!this.head) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}

export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

export class DoblyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }
  push(element) {
    const node = new DoublyNode(element)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      // attach to the tail node
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoblyLinkedList(element)
      let current = this.head
      if (index === 0) {
        // new
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          this.head.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        // last item
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = this.head.next
        // if there is only one item, then we update tail as well
        if (this.count === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        // last item
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        // link previous with current's next - skip it to remove
        previous.next = current.next
        this.tail.next = null
        current.next.prev = previous // NEWF
      }
      this.count--
      return current.element
    }
    return undefined
  }
  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (this.equalsFn(element, current.element)) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  getHead() {
    return this.head
  }
  getTail() {
    return this.tail
  }
  clear() {
    super.clear()
    this.tail = null
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    while (current != null) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
  inverseToString() {
    if (this.tail == null) {
      return ''
    }
    let objString = `${this.tail.element}`
    let previous = this.tail.prev
    while (previous != null) {
      objString = `${objString},${previous.element}`
      previous = previous.prev
    }
    return objString
  }
}

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  push(element) {
    const node = new Node(element)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.getElementAt(this.size() - 1)
      current.next = node
    }
    // set node.next to head - to have circular list
    node.next = this.head
    this.count++
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        if (!this.head) {
          // if no node in list
          this.head = node
          this.next = this.head
        } else {
          node.next = current
          current = this.getElementAt(this.size())
          // update last element
          this.head = node
          current.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = null
        } else {
          const removed = this.head
          current = this.getElementAt(this.size() - 1)
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.equalsFn = equalsFn
    this.compareFn = compareFn
  }
  push(element) {
    if (this.isEmpty()) {
      super.push(element)
    } else {
      const index = this.getIndexNextSortedElement(element)
      super.insert(element, index)
    }
  }
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }
  getIndexNextSortedElement(element) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}

export class StackLinkedList {
  constructor() {
    this.items = new DoblyLinkedList()
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items.removeAt(this.size() - 1)
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.getElementAt(this.size() - 1).element
  }
  isEmpty() {
    return this.items.isEmpty()
  }
  size() {
    return this.items.size()
  }
  clear() {
    return this.items.clear()
  }
  toString() {
    return this.items.toString()
  }
}
