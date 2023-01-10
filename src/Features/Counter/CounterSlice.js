import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name:"counter",
    initialState:{ value:0 },
    reducers:{
        increment:(state,action)=>{
           state.value +=action.payload;
        },
        dencrement:(state,action)=>{
           state.value -=action.payload;
        },
    }
})
export const {increment,dencrement}=counterSlice.actions;
export default counterSlice.reducer;