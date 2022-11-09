import {ADD_NAME} from './type';
const initialState ={
    details:[{fname:'vcvc',lname:'erere',contact:'erer'}]
}
const reducerFName=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NAME: return{
            ...state,
            details:[...state.details,action.data]
        }
        default :return state
    }
}

export default reducerFName