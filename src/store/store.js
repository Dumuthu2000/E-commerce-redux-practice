import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import authReducer from './userSlice';
import productReducer from './productsSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        product: productReducer,
    }
});