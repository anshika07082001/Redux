import { configureStore } from "@reduxjs/toolkit";
import gitSlice from '../features/gitSlice'

export const store=configureStore({
    reducer:{
        gitSlice
    }
})
export default store