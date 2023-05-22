import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: 'modalReducer',
    initialState: false,
    reducers: {
        setVisibility: (state) => {
            return !state
        }
    }
})

export const { setVisibility } = modalSlice.actions
const modalReducer = modalSlice.reducer
export default modalReducer
