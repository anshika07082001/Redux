import { ADD_NAME } from "./type"
export const addName = (obj)=>{
    return{
        type:ADD_NAME,
        data:{...obj}
    }
}