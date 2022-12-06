import { ADD, DIV, MUL, SUB,CLEAR } from "./type"

// action creator for addition
export const add=(obj)=>{
    return{
        type:ADD,
        value:obj
    }
}

// action creator for subtraction
export const sub=(obj)=>{
    return{
        type:SUB,
        value:obj
    }
}

// action creator for multiplication
export const mul=(obj)=>{
    return{
        type:MUL,
        value:obj
    }
}

// action creator for division
export const div=(obj)=>{
    return{
        type:DIV,
        value:obj
    }
}


// action creator for clear answer
export const clear=(obj)=>{
    return{
        type:CLEAR,
        value:obj
    }
}