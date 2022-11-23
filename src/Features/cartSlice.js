import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    arr:[],
    error:''
}

export const fetchCartData = createAsyncThunk('cart/fetchCartData',
    async () => {
        const res = await axios.get('https://dummyjson.com/carts/15')
        return res.data.products
    })

export const addCartData = createAsyncThunk('cart/addCartData',
    async type =>{
        const res = await axios.post('https://dummyjson.com/carts/add',{
            userId:1,
            products:type
        })
        return res.data.products
    })

export const updateCartData = createAsyncThunk('cart/updateCartData',
    async type=>{
        const res = await axios.get(' https://dummyjson.com/carts/1',{
            products:[type]
        })
        return res.data.products
    })

export const deleteCartData=createAsyncThunk('cart/deleteCartData',
    async type=>{
        const res = await axios.delete('https://dummyjson.com/carts/1')
        console.log(res.data.isDeleted)
        return res
    })

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
       
    },
    extraReducers:{
        [fetchCartData.pending]:(state,action)=>{
            state.error='pending'
        },
        [fetchCartData.fulfilled]:(state,action)=>{
            state.arr=action.payload
            state.error='Fetched successfuly'
        },
        [fetchCartData.rejected]:(state,action)=>{
            state.data=[]
            state.error=action.error.message
        },
        [addCartData.pending]:(state,action)=>{
            state.error=''
        },
        [addCartData.fulfilled]:(state,action)=>{
            state.error='Items added Successfully'
            state.arr=action.payload
        },
        [addCartData.rejected]:(state,action)=>{
            state.error='there was an error'
        },
        [updateCartData.pending]:(state,action)=>{
            state.error=''
        },
        [updateCartData.fulfilled]:(state,action)=>{
            state.error='Item Updated Successfully'
            state.arr=action.payload
        },
        [updateCartData.rejected]:(state,action)=>{
            state.error='there was an error'
        },
        [deleteCartData.pending]:(state,action)=>{
            state.error=''
        },
        [deleteCartData.fulfilled]:(state,action)=>{
            state.error='Deleted successfully'
            state.arr=[]
        },
        [deleteCartData.rejected]:(state,action)=>{
            state.error='Error'
        }
    }
})

export const { productAdded,productUpdated }=cartSlice.actions

export default cartSlice.reducer