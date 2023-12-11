import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./auth/slice";
import { teachersSlice } from "./teachers/slice";

export const store = configureStore ({
    reducer: teachersSlice
});

export default store;