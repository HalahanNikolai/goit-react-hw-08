import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk, refreshUser } from "./authOperations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const handleFulfieldlRefresh = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.token = action.payload.token;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.token = action.payload.token;
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                return initialState;
            })

            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            .addCase(refreshUser.fulfilled, handleFulfieldlRefresh)
    },
});
export const authReducer = authSlice.reducer;