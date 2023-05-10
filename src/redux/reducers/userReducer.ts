import { createSlice } from "@reduxjs/toolkit";

import User from "../../types/User";

const initialState: User[] = []

const userSlice = createSlice({
    name: 'userReducer',
    initialState: initialState,
    reducers: {}
})

const userReducer = userSlice.reducer
export default userReducer
export const {} = userSlice.actions