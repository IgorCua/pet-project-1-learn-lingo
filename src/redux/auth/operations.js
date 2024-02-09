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
        try{
            await registerApi({name, email, password});
            const { token: userToken } = await loginApi({ email, password });
            token.set(userToken);
            return {newUser, token};
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
            const { token: userToken } = await loginApi({ email, password });
            token.set(userToken);
            return {userToken};
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