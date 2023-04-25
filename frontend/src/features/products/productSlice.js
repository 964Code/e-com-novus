import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    isLoading: true,
    error: null,
};

const API_URL = 'http://localhost:5000/api/';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + 'products');
            return response.data;

        } catch (error) {
            const message = (error.response && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);

        }
    }
);


export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + 'products', product);
            return response.data;

        } catch (error) {
            const message = (error.response && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);

        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + 'products/' + product._id, product);
            return response.data;

        } catch (error) {
            const message = (error.response && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);

        }
    }
);


export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(API_URL + 'products/' + id);
            return response.data;

        } catch (error) {
            const message = (error.response && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);

        }
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
            })
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
            })
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

export const selectProductById = (state, id) => {
    return state.products.products.find(product => product._id === id);
};

export const selectProductsByCategory = (state, category, subcategory) => {
    return state.products.products.filter((product) => {
        // Filter by category
        if (product.category !== category) {
            return false;
        }

        // Filter by subcategory if it's provided
        if (subcategory && product.subcategory !== subcategory) {
            return false;
        }

        return true;
    });
};