import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth/slice";
import teachersSlice from "./teachers/slice";

const store = configureStore ({
    reducer: {
        auth: authSlice,
        teachers: teachersSlice
    }
});

export default store;