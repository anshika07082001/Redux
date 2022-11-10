import {ADD_NAME, DELETE_NAME, EDIT_NAME} from './type';
const initialState ={
    details:[{fname:'vcvc',lname:'erere',contact:54545435345}]
}
const reducerFName=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NAME: return{
            ...state,
            details:[...state.details,action.data]
        }
        case DELETE_NAME:return{
            ...state,
            details:[...action.data]
        }
        case EDIT_NAME:return{
            ...state,
            details:[...state.details]
        }
        default :return state
    }
}

export default reducerFName