import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
  ];

const counterSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        AddTodo:(state,action)=>{
         const newTodo={
            id:Date.now(),
            title:action.payload.title,
            completed:false,
          }
          state.push(newTodo)
        },
       
    }
})
export const {AddTodo}=counterSlice.actions;
export default counterSlice.reducer;