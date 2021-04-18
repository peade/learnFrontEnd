// 定义过滤器
export class AuthenticationFilter {
  execute(request) {
    console.log('Authenticating request: ' + request)
  }
}

export class DebugFilter {
  execute(request) {
    console.log('request log: ' + request)
  }
}

// 定义目标执行方法
export class Target {
  execute(request) {
    console.log(`Executing request: ${request}`)
  }
}

// 定义拦截器的链
class FilterChain {
  constructor() {
    this.filters = []
  }
  addFilter(filter) {
    this.filters.push(filter)
  }
  execute(request) {
    for (let filter of this.filters) {
      filter.execute(request)
    }
    this.target.execute(request)
  }
  setTarget(target) {
    this.target = target
  }
}
// 添加拦截器的管理器
export class FilterManager {
  constructor(target) {
    this.filterChain = new FilterChain()
    this.filterChain.setTarget(target)
  }
  setFilter(filter) {
    this.filterChain.addFilter(filter)
  }
  filterRequest(request) {
    this.filterChain.execute(request)
  }
}
export class Client {
  setFilterManager(filterManager) {
    this.filterManager = filterManager
  }
  sendRequest(request) {
    this.filterManager.filterRequest(request)
  }
}
