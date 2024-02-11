import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { getTeachersListApi } from '../../services/connectionsAPI';

export const getTeachersList = createAsyncThunk(
    'teachers/getTeachersList',

    async (data, { rejectWithValue }) => {
        try{
            const res = await getTeachersListApi(data);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)