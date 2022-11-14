import { ADD_ELEMENT, DELETE_CONTENT } from "./type";

const initialState={
    details:[{content:'dsdsds'},{content:'ddwerewrewre'}]
}
const reducerContent=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ELEMENT:return{
            ...state,
            details:[...state.details,action.data]
        }
        case DELETE_CONTENT:return{
            ...state,
            details:[...action.data]
        }
        default: return state
    }
}

export default reducerContent