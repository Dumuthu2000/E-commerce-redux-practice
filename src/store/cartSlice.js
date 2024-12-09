import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart =  [...state.cart, action.payload];
            state.total = state.total + action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((_, index) => index !== action.payload.index);
            state.total = state.total - action.payload.price;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;