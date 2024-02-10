import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser } from "./operations";

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
            .addCase(registerUser.fulfilled, (state, action) => {
                state.userName = action.payload.user.name;
                state.userEmail = action.payload.user.email;
                state.token = action.payload.token;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.userName = action.payload.user.name;
                state.userEmail = action.payload.user.email;
                state.token = action.payload.token;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.token = action.payload.token;
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

export default authSlice.reducer;