import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            return response.data;
        } catch (error) {
            throw error.response.data; // Throw error for rejection tracking
        }
    }
);


const initialState = {
    products: [],
    status: 'idle',
    error: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success";
            state.products = action.payload.products;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export default productSlice.reducer;
