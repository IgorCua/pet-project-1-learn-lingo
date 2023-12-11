import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'auth/register',

    async (newUserApi, { rejectWithValue }) => {
        try{
            return 'auth/register'
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',

    async (newUserApi, { rejectWithValue }) => {
        try{
            return 'auth/login'
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logOff = createAsyncThunk(
    'auth/logOff',

    async (userLogOffApi, { rejectWithValue }) => {
        try{
            return 'auth/logOff'
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);