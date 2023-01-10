import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice=({
    name:"counter",
    initialState:{value:0},
    reducers:{
        increment:(state,action)=>{
           state.value +=1
        },
        dencrement:(state,action)=>{
           state.value +=1
        },
    }
})
export const {increment,dencrement}=counterSlice.action;
export default counterSlice.reducers;