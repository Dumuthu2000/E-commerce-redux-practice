import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: 'idle',
    error: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            
        }
    }
});

export default productSlice.reducer;
