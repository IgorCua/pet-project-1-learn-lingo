import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getTeachersListApi from '../../services/connectionsAPI';

export const getTeachersList = createAsyncThunk(
    'teachers/getTeachersList',

    async (id, { rejectWithValue }) => {
        try{
            const list = await getTeachersList(id);
            return list;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)