import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
    registerApi,
    loginApi,
    logoutApi
} from '../../services/connectionsAPI';

export const token = {
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
            token.set(token);
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
            token.set(token);
            return {token, user};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',

    async (_, { rejectWithValue }) => {
        try{
            const user = await logOutApi();
            const { userToken } = user;
            token.unset();
            return userToken;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);