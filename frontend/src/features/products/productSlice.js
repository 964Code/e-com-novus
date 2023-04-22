import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    isLoading: true,
    error: null,
};


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: {

    }
});

export const { } = productSlice.actions;

export default productSlice.reducer;

