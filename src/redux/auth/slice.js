import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser, getFavoriteTeachersList, updateFavorites } from "./operations";

// console.log(localStorage)

const initialState = {
    userID: null,
    userName: null,
    userEmail: null,
    userFavoritesStr: null,
    userFavoriteTeachersObj: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isError: false
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
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.userID = action.payload.user.id;
                state.userName = action.payload.user.name;
                state.userEmail = action.payload.user.email;
                state.userFavoritesStr = action.payload.user.favorites;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.userID = null;
                state.userName = null;
                state.userEmail = null;
                state.userFavoritesStr = null;
                state.userFavoriteTeachersObj = null;
                state.token = action.payload.token;
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(getFavoriteTeachersList.fulfilled, (state, action) => {
                state.userFavoriteTeachersObj = action.payload;
                state.isError = false;
                state.error = null;
            })
            .addCase(updateFavorites.fulfilled, (state, action) => {
                state.userFavoritesStr = action.payload;
                state.isError = false;
                state.error = null;
            })
            .addMatcher(action => action.type.startsWith('auth') && action.type.endsWith('/pending'), (state, _) => {
                state.isLoading = true;
                state.error = null;
                state.isError = true;
            })
            .addMatcher(action => action.type.startsWith('auth') && action.type.endsWith('/rejected'), (state, action) => {
                state.error = action.payload;
                state.isError = true;
            })

    }
})

export default authSlice.reducer;