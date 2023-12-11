import { createAsyncThunk } from "@reduxjs/toolkit";

const getTeachersList = createAsyncThunk(
    'teachers/getTeachersList',

    async (getTeachersList, {rejectWithValue}) => {
        try{

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)