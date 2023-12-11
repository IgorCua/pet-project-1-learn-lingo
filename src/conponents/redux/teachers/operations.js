import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTeachersList = createAsyncThunk(
    'teachers/getTeachersList',

    async (getTeachersListApi, {rejectWithValue}) => {
        try{
            return 'teachers/getTeachersList'
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)