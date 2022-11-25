import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    arr:[],
    error:'',
    repo:[],
    count:0
}
// Function to fetch Users Data
export const usersData=createAsyncThunk('git/usersData',
    async type=>{
        const res =await axios.get('https://api.github.com/users')
        return res.data
    })
//Function to fetch searched user data
export const searchData=createAsyncThunk('git/searchData',
    async type =>{
        const res= await axios.get('https://api.github.com/users/'+type)
        return res.data
    })
// Function to fetch repository data
export const repoData=createAsyncThunk('git/repoData',
    async type=>{
        const res=await axios('https://api.github.com/users/'+type+'/repos')
        return res.data
    })

const gitSlice=createSlice({
    name:'git',
    initialState,
    reducers:{
        user(state,action){
            state.arr=[]
            state.arr.push(action.payload)
            state.error='get User'
            state.count=1
        },
        over(state){
            state.count=1
        },
        project(state){
            state.count=3
        }
    },
    extraReducers:{
        [usersData.pending]:(state)=>{
            state.error=''
        },
        [usersData.fulfilled]:(state,action)=>{
            state.error='Fetched'
            state.arr=action.payload
        },
        [usersData.rejected]:(state)=>{
            state.error='Error in Fetching Data'
        },
        [searchData.pending]:(state)=>{
            state.error=''
        },
        [searchData.fulfilled]:(state,action)=>{
            state.error='Success'
            state.arr=[]
            state.arr.push(action.payload)
        },
        [searchData.rejected]:(state)=>{
            state.error='failed'
        },
        [repoData.pending]:(state)=>{
            state.error=''
        },
        [repoData.fulfilled]:(state,action)=>{
            state.repo=action.payload
            state.count=2
            state.error='repo fetched'
        },
        [repoData.rejected]:(state)=>{
            state.error='Error in getting data of repo'
        }
    }
})

export const { user,over,project } = gitSlice.actions

export default gitSlice.reducer