import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../../redux/reducers/productsReducer";
import userReducer from "../../redux/reducers/userReducer";
import shoppingCartReducer from "../../redux/reducers/shoppingCartReducer";

const store = configureStore({
    reducer: {
        productsReducer,
        userReducer,
        shoppingCartReducer
    }
})

export default store