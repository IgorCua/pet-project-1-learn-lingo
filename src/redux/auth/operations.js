import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
    registerApi,
    loginApi,
    logoutApi,
    getFavoriteTeachersListApi
} from '../../services/connectionsAPI';

export const axiosToken = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = ``;
    },
};

export const registerUser = createAsyncThunk(
    'auth/register',

    async (newUser, { rejectWithValue }) => {
        const {name, email, password} = newUser;
        // const user = {
        //     name: name,
        //     email: email
        // }
        try{
            await registerApi({name, email, password});
            const { token, user } = await loginApi({ email, password });
            axiosToken.set(token);
            return {token, user};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',

    async (user, { rejectWithValue }) => {
        const { email, password } = user;
        try{
            const { token, user } = await loginApi({ email, password });
            axiosToken.set(token);
            
            return {token, user};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',

    async (data, { rejectWithValue }) => {
        try{
            const res = await logoutApi(data);
            // const { token, status } = res;

            axiosToken.unset(); 

            return res;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getFavoriteTeachersList = createAsyncThunk(
    'teachers/getFilteredTeachersList',

    async (data, { rejectWithValue }) => {
        try{
            const res = await getFavoriteTeachersListApi(data);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)