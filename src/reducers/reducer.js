import { combineReducers } from "redux"
import { ADD, CLEAR, DIV, MUL, SUB } from "../actions/type"

const initialState={
    calculation:[],
}

// reducer for addition 
const addReducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD:return{
            ...state,
            calculation:parseInt(action.value.num1)+parseInt(action.value.num2)
        }
        case CLEAR:return{
            calculation:action.value.add.calculation=''
        }
        default: return state
    }
}

// reducer for subtraction
const subReducer=(state=initialState,action)=>{
    switch(action.type){
        case SUB:return{
            ...state,
            calculation:parseInt(action.value.num1)-parseInt(action.value.num2)
        }
        case CLEAR:return{
            calculation:action.value.add.calculation=''
        }
        default: return state
    }
}

//reducer for multiplication
const mulreducer=(state=initialState,action)=>{
    switch(action.type){
        case MUL:return{
            ...state,
            calculation:parseInt(action.value.num1)*parseInt(action.value.num2)
        }
        case CLEAR:return{
            calculation:action.value.add.calculation=''
        }
        default:return state
    }
}

// reducer for division
const divReducer=(state=initialState,action)=>{
    switch(action.type){
        case DIV:return{
            ...state,
            calculation:(parseInt(action.value.num1)/parseInt(action.value.num2)).toFixed(2)
        }
        case CLEAR:return{
            calculation:action.value.add.calculation=''
        }
        default: return state
    }
}

// combinereducers
const rootReducer = combineReducers({add:addReducer,sub:subReducer,mul:mulreducer,div:divReducer})

export default rootReducer