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
            state.user = {...state.user, user: action.payload};
        }
    }
});

export const { loggin } = userSlice.actions;
export default userSlice.reducer;