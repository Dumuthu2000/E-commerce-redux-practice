import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
