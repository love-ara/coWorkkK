import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        resetAuthState: (state) => {
            state.success = false;
            state.error = null;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    resetAuthState,
} = authSlice.actions;

export default authSlice.reducer;
