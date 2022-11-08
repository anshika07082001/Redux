const redux = require('redux')
const createStore=redux.createStore
const BUY_CAKE ='BUY_CAKE'

const initialState=
{
    numberOfCakes: 10
}

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'first redux action'
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,numberOfCakes:state.numberOfCakes-1
            }
            default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state',store.getState())
store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
