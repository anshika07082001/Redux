import { combineReducers } from "redux"
import { BUY_CAKE, BUY_CHOCOLATES, BUY_ICECREAM } from "../type/type"

const initialState={
    numberOfCakes:10,
    numberOfChocolates:30,
    numberOfIceCreams:20
}

// reducer function for buyCake
export const cakeReducer=(state=initialState,action)=>{
    switch (action.type){
        case BUY_CAKE : 
        if(action.value<=state.numberOfCakes){
        return{
            ...state,
            numberOfCakes:state.numberOfCakes-action.value
        }}
        else{
            alert('Cake limit exceeded')
            return state
        }
        default: return state
    }
}

// reducer function for buyIceCream
export const icecreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            if(action.value<=state.numberOfIceCreams){
                return{
                ...state,
                numberOfIceCreams:state.numberOfIceCreams-action.value
        }}
        else{
            alert('Icecream limit exceeded')
            return state
        }
        default:return state
    }
}

// reducer function for buychocolate
const chocolateReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CHOCOLATES:
            if(action.value<=state.numberOfChocolates){
                return{
                ...state,
                numberOfChocolates:state.numberOfChocolates-action.value
        }}
        else{
            alert('Chocolate limit exceeded')
            return state
        }
        default:return state
    }
}

const rootReducer = combineReducers({cake:cakeReducer,icecream:icecreamReducer,chocolate:chocolateReducer})

export default rootReducer
