import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
    registerApi,
    loginApi,
    // logoutApi,
    getFavoriteTeachersListApi,
    updateFavoritesApi
} from '../../services/connectionsAPI';
import localStorage from "redux-persist/es/storage";

export const axiosToken = {
    set(token) {
        if(token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        } else {
            localStorage.getItem('persist:auth').then(data => {
                const storageToken = JSON.parse(JSON.parse(data).token);
                
                if(data) axios.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

                return;
            });
        }
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
            return rejectWithValue({
                status: error.response.status,
                statusText: error.response.statusText,
                message: error.response.data.message
            });
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',

    async (data, { rejectWithValue }) => {
        try{
            // await axiosToken.set();

            // const res = await logoutApi(data);

            axiosToken.unset();

            return {token: null};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getFavoriteTeachersList = createAsyncThunk(
    'auth/getFavoriteTeachersList',

    async (data, { rejectWithValue }) => {
        try{
            await axiosToken.set();
            const res = await getFavoriteTeachersListApi(data);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateFavorites = createAsyncThunk(
    'auth/updateFavorites',

    async (data, { rejectWithValue }) => {
        try{
            await axiosToken.set();
            const res = await updateFavoritesApi(data);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);