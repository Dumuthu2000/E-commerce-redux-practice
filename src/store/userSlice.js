import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggin: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },

        logout: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});

export const { loggin, logout } = userSlice.actions;
export default userSlice.reducer;