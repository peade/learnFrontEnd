let uid = 0
// 通过依赖Dep 解耦 订阅-发布
class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  depend() {
    Dep.target.addDep(this)
  }
  removeSub(sub) {
    const index = this.subs.indexOf(sub)
    if (index !== -1) {
      this.subs.splice(index, 1)
    }
  }
  // 后续用来通知订阅者更新
  notify() {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  }
}
Dep.target = null

export default Dep