import { createAsyncThunk } from "@reduxjs/toolkit";

export const modalLogIn = createAsyncThunk(
    'modals/modalLogIn',

    (isOpen, _) => {
        if(typeof isOpen === 'boolean') {
            return isOpen;
        } else {
            return new Error('Should pass boolean type');
        }
    }
);

export const modalRegister = createAsyncThunk(
    'modals/modalRegister',

    (isOpen, _) => {
        if(typeof isOpen === 'boolean') {
            return isOpen;
        } else {
            return new Error('Should pass boolean type');
        }
    }
);