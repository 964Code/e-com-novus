import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectProducts } from "../products/productSlice";


// We set the initial as and object with the cart-array, amount and total
const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
};


// We create the slice with the name "cart" and the initial state. We also add the reducers, but we don't need any for now.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // We add the reducers here, the functions that will change the state in this slice!
    reducers: {
        //clearCart: (state) => { state.cart = [] }, 
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    // We add the extra reducers here, the functions that will get called when the async thunk is pending, fulfilled or rejected.
    extraReducers: {
        /*  [getCartItems.pending]: (state) => {
             state.isLoading = true;
         },
         [getCartItems.fulfilled]: (state, action) => {
             state.isLoading = false;
             state.cartItems = action.payload;
         },
         [getCartItems.rejected]: (state) => {
             state.isLoading = false;
         }, */
    },
});

// We export the actions, so that we can use them in the components. The actions are the functions that change the state.
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
