import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import User from "../../types/User";

const initialState: {
    error: string,
    loggedUser: string | null,
    users: User[]
} = {
    error: '',
    loggedUser: null,
    users: []
}

const userSlice = createSlice({
    name: 'userReducer',
    initialState: initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        loginUser: (state, action: PayloadAction<string>) => {
            window.localStorage.setItem('userId', action.payload)
            state.loggedUser = action.payload
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer
export const { registerUser, loginUser } = userSlice.actions