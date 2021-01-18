import React, {FunctionComponent, useMemo,useState,useCallback,useEffect } from 'react'
import {connect} from 'react-redux';
interface IndexProps{
    num:number;
    getCallback:()=>void;
    state?:any
}
const Text=(props:IndexProps)=>{
    console.log(props.state);
    const {num,getCallback}=props;
    const [count, setcount] = useState(()=>getCallback());
    const expensive=()=>{
        let expensive=0;
        console.log("expensive computed")
        for(let i =0;i< num *100;i++){
            expensive=expensive+1;
        }
        return expensive;
    }
   const sum= useMemo(expensive,[num]);
    useEffect(() => {
        setcount(getCallback());
        
    }, [num])
    return <div>
        {count}-{sum}
        这是子组件
        <span>test</span>
    </div>
}
export default connect((state:any)=>{
    return {
        state,
    }
})(Text);
