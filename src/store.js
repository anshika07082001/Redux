import { createStore,applyMiddleware } from 'redux';
import reducerContent from './actions/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducerContent,applyMiddleware(thunk,logger))
// const axios = require('axios')

export default store