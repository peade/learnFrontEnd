// symbol 单例
let single = null

export function GetInstance(obj = {}) {
  if (single === null) {
    single = obj
  }
  return single
}
