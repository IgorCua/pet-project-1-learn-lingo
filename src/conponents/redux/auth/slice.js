import { createSlice } from "@reduxjs/toolkit"
import { logIn, logOff, registerUser } from "./operations"

const initialState = {
    userName: '',
    userEmail: '',
    token: '',
    isLoading: false,
    error: null,

}

createSlice ({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser, (state, action) => {

            })
            .addCase(logIn, (state, action) => {

            })
            .addCase(logOff, (state, action) => {

            })
            .addMatcher(action => action.type.startsWith('auth') && action.type.endsWith('/pending'), (state, _) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(action => action.type.startsWith('auth') && action.type.endsWith('/rejected'), (state, action) => {
                state.error = action.payload;
            })

    }
})