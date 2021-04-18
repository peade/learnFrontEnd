// 业务服务层
class EJBService {
  doProcessing() {
    console.log('Processing task by invoking EJB Service')
  }
}

class JMSService {
  doProcessing() {
    console.log('Processing task by invoking JMS Service')
  }
}

// 服务查询层
class BusinessLookup {
  getBusinessService(serviceType) {
    switch (serviceType.toUpperCase()) {
      case 'EJB':
        return new EJBService()
      default:
        return new JMSService()
    }
  }
}

// 定义业务代表
export class BusinessDelegate {
  constructor() {
    this.lookupService = new BusinessLookup()
  }
  setServiceType(serviceType) {
    this.serviceType = serviceType
  }
  doTask() {
    this.businessService = this.lookupService.getBusinessService(
      this.serviceType
    )
    this.businessService.doProcessing()
  }
}

// 定义客户端
export class Client {
  constructor(businessService) {
    this.businessService = businessService
  }
  doTask() {
    this.businessService.doTask()
  }
}
