import styles from './index.css';
import React, { useState,useCallback } from 'react'
import Text from './Text';
import store from  './store';
import { Provider } from 'react-redux'
const App=()=> {
  const [num, setnum] = useState(1);
  const numCallback=useCallback(
    () => {
      return num;
    },
    [num],
  )
  console.log("父组件render",store)
    return (
      <Provider store={store}>
      <div>
        这是父组件
        <button onClick={()=>{
                    setnum(num+1)
                }}> 点击设置不变的值</button>
        {num}
        <Text getCallback={numCallback} num={num}></Text>
      </div>
      </Provider>
    )

}

export default App;
