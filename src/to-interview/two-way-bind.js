export function twoWayBindDemo() {
  let obj = {}
  let input = document.getElementById('input')
  let span = document.getElementById('span')
  // 数据劫持
  Object.defineProperty(obj, 'text', {
    configurable: true,
    enumerable: true,
    get() {
      console.log('get data')
      return this.value
    },
    set(newVal) {
      console.log('setValue')
      input.value = newVal
      span.innerHTML = newVal
    }
  })
  // 输入监听
  input.addEventListener('keyup', function(e) {
    obj.text = e.target.value
  })
}
