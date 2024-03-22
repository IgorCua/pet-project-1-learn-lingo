import { createSlice } from "@reduxjs/toolkit";
import { modalLogIn, modalRegister, modalBookLesson } from "./operations";

const initialState = {
    modalLogIn: false,
    modalRegistration: false,
    modalBookLesson: false
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
            .addCase(modalBookLesson.fulfilled, (state, action) => {
                state.modalBookLesson = action.payload;
            })
    }
});

export default modalsSlice.reducer;