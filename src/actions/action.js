import axios from "axios"
import { ADD_ELEMENT,DELETE_CONTENT,TODO_STARTED,USER_FAILURE,USER_SUCCESS } from "./type"
export const addContent=(obj)=>{
    return{
        type:ADD_ELEMENT,
        data:{...obj},
    }
}

export const deleteContent=(obj)=>{
    return{
        type:DELETE_CONTENT,
        data:[...obj]
    }
}
export const loadUsers = ()=>dispatch=>{
    dispatch({type:TODO_STARTED})
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(
        data=>{
            dispatch({type:USER_SUCCESS,data:data.data})
        })
        .catch(
            error=>dispatch({type:USER_FAILURE,error:error.message})
        )
}