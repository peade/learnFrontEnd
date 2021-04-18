class HomeView {
  show() {
    console.log('Displaying Home Page')
  }
}
class StudentView {
  show() {
    console.log('Displaying Student Page')
  }
}
// 定义展示器
class Dispatcher {
  constructor() {
    this.studentView = new StudentView()
    this.homeView = new HomeView()
  }
  dispatch(request) {
    if (request.toUpperCase() === 'STUDENT') {
      this.studentView.show()
    } else {
      this.homeView.show()
    }
  }
}
// 定义前端控制器
export class FrontController {
  constructor() {
    this.dispatcher = new Dispatcher()
  }
  isAuthenticUser() {
    console.log('User is authenticated successfully.')
    return true
  }
  trackRequest(request) {
    console.log('Page requested: ' + request)
  }
  dispatchRequest(request) {
    //记录每一个请求
    this.trackRequest(request)
    //对用户进行身份验证
    if (this.isAuthenticUser()) {
      this.dispatcher.dispatch(request)
    }
  }
}
