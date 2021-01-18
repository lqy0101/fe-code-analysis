const muticastchannel=():any=>{
    const currentTakers: any[]=[];
    const take=(cb:any,match:any)=>{
        cb['MATCH']=match;
        currentTakers.push(cb);
    }
    const put=(input:any)=>{
        const takers=currentTakers;
        for(let i=0;i<takers.length;i++){
            const taker=takers[i];
            if(taker['MATCH'](input)){
                taker(input);
            }
        }
    }
    return {
        take,
        put
    }
}
export default muticastchannel;