import {createStore} from 'redux'
import reducerFName from './actions/reducer'

const store = createStore(reducerFName)

export default store