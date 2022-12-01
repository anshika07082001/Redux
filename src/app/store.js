import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../features/todoSlice'
import logger from 'redux-logger'

export const store=configureStore({
    reducer:{
        todoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store