import proc from "./proc";

// 简单判断是不是promise
function isPromise(obj: Promise<any>) {
  return obj && typeof obj.then === 'function';
}

function runTakeEffect(env: { channel: any; }, { channel = env.channel, pattern }: any, cb: any) {
  const matcher = (input: { type: any; }) => input.type === pattern;

  // 注意channel.take的第二个参数是matcher
  // 我们直接写一个简单的matcher，就是输入必须跟pattern一样才行
  // 这里的pattern就是我们经常用的action名字，比如FETCH_USER_INFO
  // Redux-Saga不仅仅支持这种字符串，还支持多种形式，也可以自定义matcher来解析
  channel.take(cb, matcher);
}

function runForkEffect(env: any, { fn }: any, cb: () => void) {
  const taskIterator = fn();    // 运行fn得到一个迭代器

  proc(env, taskIterator);      // 直接将taskIterator给proc处理

  cb();      // 直接调用cb，不需要等待proc的结果
}

function runPutEffect(env: { dispatch: (arg0: any) => any; }, { action }: any, cb: (arg0: any) => void) {
  const result = env.dispatch(action);     // 直接dispatch(action)

  cb(result);
}

function runCallEffect(env: any, { fn, args }: any, cb: (arg0: any, arg1: boolean | undefined) => void) {
  const result = fn.apply(null, args);

  if (isPromise(result)) {
    return result
      .then((data: any) => cb(data,false))
      .catch((error: any) => cb(error, true));
  }

  cb(result,false);
}

const effectRunnerMap = {
  'TAKE': runTakeEffect,
  'FORK': runForkEffect,
  'PUT': runPutEffect,
  'CALL': runCallEffect
};

export default effectRunnerMap;