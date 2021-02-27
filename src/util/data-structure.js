export class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

export function defaultEquals(a, b) {
  return a === b
}

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export class TreeNode {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  toString() {
    return `${this.key}`
  }
}

export function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}
