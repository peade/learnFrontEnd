export const DetectBack = {
  addEvt(fn) {
    if (history.pushState) {
      history.pushState('', 'title', '#')
    }
    window.addEventListener('popstate', fn)
  },
  removeEvt(fn) {
    window.removeEventListener('popstate', fn)
  }
}
