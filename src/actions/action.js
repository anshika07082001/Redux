import { ADD_ELEMENT,DELETE_CONTENT } from "./type"
export const addContent=(obj)=>{
    return{
        type:ADD_ELEMENT,
        data:{...obj}
    }
}

export const deleteContent=(obj)=>{
    return{
        type:DELETE_CONTENT,
        data:[...obj]
    }
}