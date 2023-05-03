import { createSlice } from "@reduxjs/toolkit";

/* const loadCartItemsFromLocalStorage = () => {
    const cartItems = localStorage.getItem("cartItems");
    return Array.isArray(cartItems) ? JSON.parse(cartItems) : [];
}; */

const loadCartItemsFromLocalStorage = () => {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartItemsToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const initialState = {
    cartItems: loadCartItemsFromLocalStorage(),
    amount: 0,
    total: 0,
    isLoading: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            saveCartItemsToLocalStorage(state.cartItems);
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item._id === newItem._id
            );

            if (existingItemIndex >= 0) {
                state.cartItems.push({ ...newItem, amount: 1 });
            } else {
                state.cartItems.push({ ...newItem, amount: 1 });
            }
            saveCartItemsToLocalStorage(state.cartItems);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
            saveCartItemsToLocalStorage(state.cartItems);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item._id === payload._id);
            cartItem.amount = cartItem.amount + 1;
            saveCartItemsToLocalStorage(state.cartItems);
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item._id === payload._id);
            cartItem.amount = cartItem.amount - 1;
            saveCartItemsToLocalStorage(state.cartItems);
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
});

export const {
    clearCart,
    addItem,
    removeItem,
    increase,
    decrease,
    calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;