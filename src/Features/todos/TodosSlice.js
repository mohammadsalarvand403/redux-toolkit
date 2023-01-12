import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getAsyncTodos= createAsyncThunk("todos/getAsyncTodos",async(_,{rejectWithValue})=>{
try {
  const Response= await axios.get("http://localhost:3001/todos")
 return Response.data
 
} catch (error) {
  return rejectWithValue([],error)
}
});
export const addAsyncTodos= createAsyncThunk
("todos/addAsyncTodos",async(payload,{rejectWithValue})=>{
try {
  const Response= await axios.post("http://localhost:3001/todos",{ 
  id: Date.now(),
  title:payload.title,
  completed:false
})
 return Response.data
 
} catch (error) {
  return rejectWithValue([],error)
}
});
export const toggleCompleteAsync= createAsyncThunk
("todos/toggleCompleteAsync",async(payload,{rejectWithValue})=>{
try {
  const Response= await axios.put(`http://localhost:3001/todos/${payload.id}`,{
    completed: payload.completed,
    title:payload.title
  })
 return Response.data
 
} catch (error) {
  return rejectWithValue([],error)
}
});
export const deleteAsyncTodo= createAsyncThunk
("todos/deleteAsyncTodo",async(payload,{rejectWithValue})=>{
try {
   await axios.delete(`http://localhost:3001/todos/${payload.id}`)
 return {id:payload.id}
 
} catch (error) {
  return rejectWithValue([],error)
}
});
 const initialState = 
 {
    todos:[],
    loading:false,
    error:null
 };

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
          state.todos.push(newTodo)
        },
        toggleTodo:(state,action)=>{
          const selectedTodo=state.todos.find((t)=> t.id === action.payload.id)
          selectedTodo.completed = !selectedTodo.completed;
        },
        deleteTodo:(state,action)=>{
          const filteredTodo=state.todos.filter((t)=> t.id !== action.payload.id)
          state.todos=filteredTodo;
        }
       
    },
    extraReducers:{
      [getAsyncTodos.fulfilled]:(state,action)=>{
        return {...state,todos:action.payload,loading:false,error:null}
      },
      [getAsyncTodos.pending]:(state,action)=>{
        return {...state,todos:[],loading:true,error:null}
      },
      [getAsyncTodos.rejected]:(state,action)=>{
        return {...state,todos:[],loading:false,error:action.error.message}
      },
      [addAsyncTodos.fulfilled]:(state,action)=>{
        state.todos.push(action.payload)
      },
      [toggleCompleteAsync.fulfilled]:(state,action)=>{
         const selectedTodo=state.todos.find((t)=> t.id === action.payload.id)
         selectedTodo.completed = action.payload.completed;
      },
      [deleteAsyncTodo.fulfilled]:(state,action)=>{
         state.todos = state.todos.filter((t)=> t.id !== action.payload.id)
         
      }
    
    }
})
export const {AddTodo,toggleTodo,deleteTodo}=counterSlice.actions;
export default counterSlice.reducer;