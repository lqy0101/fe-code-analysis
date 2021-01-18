// effect构造函数
const makeEffect = (type: string, payload: { pattern?: any; fn?: any; args?: any[]; action?: any }) => ({
    IO: true,
    type,
    payload
  })
  // 用于命令middleware在store上等待指定的action，发起与pattern匹配上之后。会将generator暂停
  export function take(pattern: any) {
    return makeEffect('TAKE', { pattern })
  }
  // 命令middleware以非阻塞的形式执行fn
  export function fork(fn: any) {
    return makeEffect('FORK', { fn })
  }
  // 命令middleware以参数args调用函数fn，返回promise的函数 
  export function call(fn: any, ...args: any[]) {
    return makeEffect('CALL', { fn, args })
  }
  // 触发store.dispatch
  export function put(action: any) {
    return makeEffect('PUT', { action })
  }
  export function takeEvery(pattern:any, saga:any) {
    function* takeEveryHelper() {
      while (true) {
        yield take(pattern);
        yield fork(saga); 
      }
    }
  
    return fork(takeEveryHelper);
  }