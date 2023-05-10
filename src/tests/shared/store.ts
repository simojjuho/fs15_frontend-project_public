import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../../redux/reducers/productsReducer";

const store = configureStore({
    reducer: {
        productsReducer
    }
})

export default store