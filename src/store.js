import { createStore } from 'redux';
import reducerContent from './actions/reducer';

const store = createStore(reducerContent)

export default store