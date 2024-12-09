import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {name: "abc", price: 10},
        {name: "def", price: 20},
        {name: "ghi", price: 60},
        {name: "jkl", price: 50},
    ],
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
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;