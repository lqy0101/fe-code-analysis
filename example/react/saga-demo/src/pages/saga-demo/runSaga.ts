import proc from './proc';
export function runSaga({channel,dispatch,getState}:any,saga:any,...arg:any){
    const iterator=saga(...arg);
    const env={channel,dispatch,getState};
    proc(env,iterator);
}