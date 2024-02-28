import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { 
    getTeachersListApi, 
    getFilteredTeachersListApi 
} from '../../services/connectionsAPI';

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

export const getFilteredTeachersList = createAsyncThunk(
    'teachers/getFilteredTeachersList',

    async (data, { rejectWithValue }) => {
        try{
            const res = await getFilteredTeachersListApi(data);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)