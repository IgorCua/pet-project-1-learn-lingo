import { createSlice } from "@reduxjs/toolkit";
import { modalLogIn, modalRegister } from "./operations";

const initialState = {
    modalLogIn: false,
    modalRegistration: false,
}


const modalsSlice = createSlice({
    name: 'modals',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(modalLogIn.fulfilled, (state, action) => {
                state.modalLogIn = action.payload;
            })
            .addCase(modalRegister.fulfilled, (state, action) => {
                state.modalRegistration = action.payload;
            })
    }
});

export default modalsSlice.reducer;