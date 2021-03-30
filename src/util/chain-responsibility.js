export class AbstractLogger {
  constructor() {
    if (new.target === AbstractLogger) {
      throw new Error('this class must be extends')
    }
  }
  setNextLogger(nextLogger) {
    this.nextLogger = nextLogger
  }
  write() {}
  // 对于形成链的数据，依次执行
  logMessage(level, message) {
    if (this.level <= level) {
      this.write(message)
    }
    if (this.nextLogger) {
      this.nextLogger.logMessage(level, message)
    }
  }
}

AbstractLogger.INFO = 1
AbstractLogger.DEBUG = 2
AbstractLogger.ERROR = 3

// 定义错误类型
export class StandardLogger extends AbstractLogger {
  constructor(level) {
    super()
    this.level = level
  }
  write(message) {
    console.log(`Standard Console::Logger: ` + message)
  }
}

export class ErrorLogger extends AbstractLogger {
  constructor(level) {
    super()
    this.level = level
  }
  write(message) {
    console.log('Error Console::Logger: ' + message)
  }
}
export class FileLogger extends AbstractLogger {
  constructor(level) {
    super()
    this.level = level
  }
  write(message) {
    console.log(`File Console::Logger: ` + message)
  }
}

export function getChainOfLoggers() {
  const errorLogger = new ErrorLogger(AbstractLogger.ERROR)
  const fileLogger = new FileLogger(AbstractLogger.DEBUG)
  const standardLogger = new StandardLogger(AbstractLogger.INFO)

  errorLogger.setNextLogger(fileLogger)
  fileLogger.setNextLogger(standardLogger)

  return errorLogger
}
