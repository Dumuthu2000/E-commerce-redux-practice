import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    "/products/fetch",
    async() => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            return response.data;
        } catch (error) {
            return console.log(error.response.data);
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
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success";
            state.products = action.payload;
        })
    }
});

export default productSlice.reducer;
