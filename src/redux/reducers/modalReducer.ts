import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    loginModal: boolean
    registrationModal: boolean
} = {
    loginModal: false,
    registrationModal: false
}

const modalSlice = createSlice({
    name: 'modalReducer',
    initialState: initialState,
    reducers: {
        setRegistrationVisibility: (state) => {
            state.registrationModal = !state.registrationModal
            state.loginModal = false
        },
        setLoginVisibility: (state) => {
            state.loginModal = !state.loginModal
            state.registrationModal = false
        }
    }
})

export const { setRegistrationVisibility, setLoginVisibility } = modalSlice.actions
const modalReducer = modalSlice.reducer
export default modalReducer
