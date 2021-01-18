import effectRunnerMap  from './effectRunnerMap';
export default function proc(env:any,iterator:any){
    function next(arg:any,isErr:any){
        let result;
        if(isErr){
            result=iterator.throw(arg);
        }else{
            result =iterator.next(arg);
        }
        if(!result.done){
            digestEffect(result.value,next);
        }
    }
    next();

    function runEffect(effect:any,currCb:any){
        if(effect && effect.IO){
            const effectRunner=effectRunnerMap[effect.type];
            effectRunner(env,effect.payload,currCb);
        }else{
            currCb();
        }
    }
    function digestEffect(effect:any,cb:any){
        let effectSettled:any;
        function currCb(res:any,isErr:any){
            if(effectSettled){
                return;
            }
            effectSettled=true;
            cb(res,isErr);
        }
        runEffect(effect,currCb);
    }
}