import { configureStore } from "@reduxjs/toolkit"

import productsReducer from './reducers/productsReducer'
import userReducer from "./reducers/userReducer"
import shoppingCartReducer from "./reducers/shoppingCartReducer"

const store = configureStore({
    reducer: {
        productsReducer,
        userReducer,
        shoppingCartReducer
    }
})

export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store