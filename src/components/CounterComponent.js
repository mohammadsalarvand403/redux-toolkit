import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,dencrement } from "../Features/Counter/CounterSlice";
const CounterComponent = () => {
    const [inputValue,setInputValue]=useState()
  const counter=useSelector(state=> state.counter)
  const dispatch=useDispatch()
    return (  
    <div>
        <h1>Counter State</h1>
        <h2>Counter :{counter.value}</h2>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={()=> dispatch(increment(Number(inputValue) | 0))}>+</button>
        <button onClick={()=> dispatch(dencrement(Number(inputValue) | 0))}>-</button>
    </div>
    );
}
 
export default CounterComponent;