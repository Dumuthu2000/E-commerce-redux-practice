import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import authReducer from './userSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    }
});