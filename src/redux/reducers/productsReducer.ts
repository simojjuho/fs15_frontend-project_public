import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from 'axios'

import Product from "../../types/Product";

const initialState: {
    loading: boolean,
    error: string,
    products: Product[]
} = {
    loading: false,
    error: '',
    products: []
}

export const getAllProducts = createAsyncThunk(
    'getAllProducts',
    async () => {
        try {
            const result = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
            return result.data
        } catch (e: unknown) {
            let error = e as AxiosError
            return error.message
        }
    }
)

const productsSlice = createSlice({
    name: 'productsReducer',
    initialState: initialState,
    reducers: {
        createProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                products: state.products.filter(product => product.id !== id)
            }
        },
        emptyProductsReducer: (state) => {
            return {
                ...state,
                products: []
            }
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            return {
                ...state,
                products: state.products.map(product => product.id !== action.payload.id ? product : action.payload)
            }
        }
    },
    extraReducers: (build) => {
        build
            .addCase(getAllProducts.fulfilled, (state, action) => {

            })
            .addCase(getAllProducts.pending, (state, action) => {})
            .addCase(getAllProducts.rejected, (state, action) => {})
    }
})

export const { createProduct, removeProduct, emptyProductsReducer, updateProduct } = productsSlice.actions
const productsReducer = productsSlice.reducer
export default productsReducer