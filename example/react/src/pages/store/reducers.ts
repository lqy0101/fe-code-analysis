function counter(state:any, action:any) {
    if (typeof state === 'undefined') {
         state = 0; // 如果 state 是 undefined，用这个默认值初始化 store
     }
     if (action.type === 'FETCH_USER_FAILED') {
         return action.payload;
     }
     else if (action.type === 'FETCH_USER_SUCCEEDED') {
         console.log("state",state);
         return action.payload;
     }
     else {
         return state; // 未识别 action 会经过这里
     }
}
export default counter;