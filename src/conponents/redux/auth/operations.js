import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'auth/register',

    async (newUser, { rejectWithValue }) => {
        try{

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',

    async (newUser, { rejectWithValue }) => {
        try{
            
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logOff = createAsyncThunk(
    'auth/logOff',

    async (userLogOff, { rejectWithValue }) => {
        try{

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);