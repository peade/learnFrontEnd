export function Callbacks(options) {
  console.log(options)
  let firing
  let firingLength
  let firingStart
  let memory
  let list = []
  const self = {
    // add a callback or a collection of callbacks to the list
    add: function() {
      if (list) {
        // first, we save the current length
        // 首先我们存储当前列表长度
        const start = list.length
        arguments.foreach(item => {
          list.push(item)
        })
        // do we need to add the callbacks to the current firing batch?
        if (firing) {
          firingLength = list.length
        } else if (memory) {
          // 如果options.memory为true，则将memory做为参数，应用最近增加的回调函数
          firingStart = start
          FileReader(memory)
        }
      }
      console.log(firingLength, firingStart)
      return this
    }
  }
  return self
}

// export function Callbacks(options) {
//   options = Object.assign({}, options)
//   // last fire value(for non-forgettable lists)
//   let memory
//   // flag to know if list was already fired
//   let fired
//   // flag to know if list is current firing
//   let firing
//   // first callback to fire
//   let firingStart
//   // End of the loop when firing
//   let firingLength
//   // Index of currently firing callback
//   let firingIndex
//   // Actual callback list
//   let list = []
//   // stack of fire calls for repeatable lists
//   let stack = !options.once && []

//   // fire callbacks
//   const fire = function(data) {
//     // if memeory be true, then record data
//     memory = options.memory && data
//     fired = true // 标记触发回调
//     firingIndex = firingStart || 0
//     firingStart = 0
//     firingLength = list.length
//     // 标记正在触发回调
//     firing = true
//     for (; list && firingIndex < firingLength; firingIndex++) {
//       if(list[firingIndex].apply(data[0],data[1])===false){
//         // 阻止未来可能由于add所产生的回调
//       }
//     }
//   }
// }
