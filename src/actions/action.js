import { ADD_NAME, DELETE_NAME, EDIT_NAME } from "./type"
export const addName = (obj)=>{
    return{
        type:ADD_NAME,
        data:{...obj}
    }
}
export const deleteName = (delObj)=>{
    return{
        type:DELETE_NAME,
        data:[...delObj]
    }
}
export const editName = ()=>{
    return{
        type:EDIT_NAME,
        data:[]
    }
}