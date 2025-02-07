
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.goit.global';

export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global'
})

export const setAuthHeader = (token) => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`
}
//*  POST @ register//
export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const { data } = await goitApi.post('users/signup', credentials);
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
//*  POST @ login//
export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const { data } = await goitApi.post('users/login', credentials)
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})
//*  POST @ logout//
export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    //const token = thunkApi.getState().auth.token
    try {
        const { data } = await goitApi.post('users/logout'
            // {}, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // } }
        );
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);

    }
})
/*
* GET @ /users/current  
*/
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);