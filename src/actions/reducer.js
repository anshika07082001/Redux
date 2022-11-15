import { ADD_ELEMENT, DELETE_CONTENT, TODO_STARTED, USER_FAILURE, USER_SUCCESS } from "./type";

const initialState={
    loading:false,
    details:[],
    error:''
}
const reducerContent=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ELEMENT:return{
            ...state,
            details:[action.data,...state.details]
        }
        case DELETE_CONTENT:return{
            ...state,
            details:[...action.data]   
        }
        case TODO_STARTED:{
            return{
                ...state,
                loading:true,
                error:''
            }
        }
        case USER_SUCCESS:{
            console.log(action)
            return{
                ...state,
                details:action.data,
                loading:false
            }
        }
        case USER_FAILURE:{
            return{
                ...state,
                loading:false,
                error:action.error
            }
        }
        default: return state
    }
}

export default reducerContent