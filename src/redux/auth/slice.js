import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOff, registerUser } from "./operations";

const initialState = {
    userName: 'name',
    userEmail: 'mail',
    token: '',
    isLoading: false,
    error: null,
}

const authSlice = createSlice ({
    name: 'auth',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            // .addCase(registerUser, (state, action) => {
            //     state = action.payload;
            // })
            // .addCase(logIn, (state, action) => {
            //     state = action.payload;
            // })
            // .addCase(logOff, (state, action) => {
            //     state = action.payload;
            // })
            .addMatcher(action => action.type.startsWith('auth') && action.type.endsWith('/pending'), (state, _) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(action => action.type.startsWith('auth') && action.type.endsWith('/rejected'), (state, action) => {
                state.error = action.payload;
            })

    }
})

export default authSlice.reducer;