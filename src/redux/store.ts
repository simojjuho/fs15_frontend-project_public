import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './reducers/productsReducer'

const store = configureStore({
    reducer: {
        productsReducer
    }
})

export default store