export const BackDetect = {
  addEvt(fn) {
    const state = {
      url: location.href
    }
    history.pushState(state, '', document.url)
    window.addEventListener('popstate', fn)
  },
  removeEvt(fn) {
    window.removeEventListener('popstate', fn)
  }
}
