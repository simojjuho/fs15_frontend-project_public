import { createSlice } from "@reduxjs/toolkit"

import ShoppingCart from "../../types/ShoppingCart"

const initialState: ShoppingCart[] = [] 

const shoppingCartSlice = createSlice({
    name: 'shoppingCartReducer',
    initialState: initialState,
    reducers: {

    }
})

const shoppingCartReducer = shoppingCartSlice.reducer
export default shoppingCartReducer
const {} = shoppingCartSlice.actions