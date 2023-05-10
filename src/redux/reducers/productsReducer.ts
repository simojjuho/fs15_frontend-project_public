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
            return error
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
        },
        sortProductsByPrice: (state, action: PayloadAction<string>) => {
            if (action.payload === 'desc') state.products.sort((a, b) => b.price-a.price)
            if (action.payload === 'asc') state.products.sort((a, b) => a.price-b.price)
        }
    },
    extraReducers: (build) => {
        build
            .addCase(getAllProducts.fulfilled, (state, action) => {
                if(action.payload instanceof AxiosError) {
                    state.error = action.payload.message
                } else {
                    state.products = action.payload
                }
                state.loading = false
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false
                state.error = 'Cannot get data from the server'
            })
    }
})

export const { createProduct, removeProduct, emptyProductsReducer, updateProduct, sortProductsByPrice } = productsSlice.actions
const productsReducer = productsSlice.reducer
export default productsReducer