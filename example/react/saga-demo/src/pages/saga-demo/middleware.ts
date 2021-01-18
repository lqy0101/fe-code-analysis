import { Dispatch,Action } from "redux";
// import muticastchannel  from './channel';
import {runSaga} from './runSaga';
const sagaMiddlewareFactory=()=>{
    // const channel=muticastchannel();
    let boundRunSaga:any;
    const sagaMiddleware=({dispatch,getState}:any)=>{
        console.log('middleware init');
        boundRunSaga=runSaga.bind(null,{
            // channel,
            dispatch,
            getState,
        })
        return (next:Dispatch)=>(action:Action)=>{
            console.log("middleware start");
            const result=next(action);
            // channel.put(action);
            console.log("middleware end");
            return result;
        }
    }
    sagaMiddleware.run=(...arg:any)=>{
        boundRunSaga(...arg);
    }
    return sagaMiddleware;
}
export default sagaMiddlewareFactory;