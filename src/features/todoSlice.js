import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState={
    arr:[{value:true,content:'helo'},{value:false,content:'hjsdsd'},{value:true,content:'helo'}],
    index:''
}

// reducer function

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        add(state,action){
            state.arr.push(action.payload)
        },
        del(state,action){
            state.arr.splice(action.payload,1)
        },
        edit(state,action){   
            state.arr[action.payload.index]={...action.payload}
        },
        check(state,action){
            if(state.arr[action.payload].value===true){
                state.arr[action.payload].value=false
            }
            else{
                state.arr[action.payload].value=true
            }
        },
        flg(state,action){
            state.index=action.payload
        }
    }
})

export const {add,del,edit,check,flg} = todoSlice.actions

export default todoSlice.reducer