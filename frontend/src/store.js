import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
import globalReducer from './features/global/globalSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        modal: modalReducer,
        global: globalReducer,
    },
});


