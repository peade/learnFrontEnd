// Array.from
export function arrayFrom() {
  const newArr = Array.from(document.querySelectorAll('div'))
  console.log('arrayFrom', newArr)
}

// sliceCall
export function sliceCall() {
  const newArr = Array.prototype.slice.call(document.querySelectorAll('div'))
  console.log('sliceCall', newArr)
}
// extendGrammar
export function extendGrammar() {
  console.log('extendGrammar', [...document.querySelectorAll('div')])
}
// concat
export function arrConcat() {
  console.log(
    'arrConcat',
    Array.prototype.concat.apply([], document.querySelectorAll('div'))
  )
}
