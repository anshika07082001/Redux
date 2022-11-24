import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    arr:[],
    error:''
}

export const usersData=createAsyncThunk('git/usersData',
    async type=>{
        const res =await axios.get('https://api.github.com/users')
        return res.data
    })

export const searchData=createAsyncThunk('git/searchData',
    async type =>{
        const res= await axios.get('https://api.github.com/users/'+type)
        return res.data
    })

const gitSlice=createSlice({
    name:'git',
    initialState,
    reducers:{

    },
    extraReducers:{
        [usersData.pending]:(state,action)=>{
            state.error=''
        },
        [usersData.fulfilled]:(state,action)=>{
            state.error='Fetched'
            state.arr=action.payload
        },
        [usersData.rejected]:(state,action)=>{
            state.error='Error in Fetching Data'
        },
        [searchData.pending]:(state,action)=>{
            state.error=''
        },
        [searchData.fulfilled]:(state,action)=>{
            state.error='Success'
            state.arr=[]
            state.arr.push(action.payload)
        },
        [searchData.rejected]:(state,action)=>{
            state.error='failed'
        }
    }
})


export default gitSlice.reducer