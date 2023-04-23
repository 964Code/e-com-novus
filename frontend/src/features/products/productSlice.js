import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    isLoading: true,
    error: null,
};

const API_URL = 'http://localhost:5000/api/';

/* export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(API_URL + 'products');
        const data = await response.json();
        return data;
    }
);
 */

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(API_URL + 'products');
        return response.data;
    }
);

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product) => {
        const response = await axios.post(API_URL + 'products', product);
        return response.data;
    }

);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product) => {
        const response = await axios.put(API_URL + 'products/' + product._id, product);
        return response.data;
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        const response = await axios.delete(API_URL + 'products/' + id);
        return response.data;
    }
);


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(createProduct.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            }
            )
            .addCase(updateProduct.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.products.findIndex((product) => product._id === action.payload._id);
                state.products[index] = action.payload;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state, action) => {
                state.isLoading = true;
            }
            )
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = state.products.filter((product) => product._id !== action.payload._id);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

    }
});

export const { } = productSlice.actions;


export default productSlice.reducer;

export const selectProducts = (state) => state.products.products;