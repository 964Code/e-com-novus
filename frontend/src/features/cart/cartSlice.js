import { createSlice } from "@reduxjs/toolkit";

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
            state.amount = 0;
            state.total = 0;
            saveCartItemsToLocalStorage(state.cartItems);
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item._id === newItem._id
            );

            if (existingItemIndex >= 0) {
                state.cartItems[existingItemIndex].amount++;
            } else {
                state.cartItems.push({ ...newItem, amount: 1 });
            }
            saveCartItemsToLocalStorage(state.cartItems);
            state.amount++;
            state.total += newItem.price;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const itemToRemove = state.cartItems.find((item) => item._id === itemId);
            state.amount -= itemToRemove.amount;
            state.total -= itemToRemove.price * itemToRemove.amount;
            state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
            saveCartItemsToLocalStorage(state.cartItems);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item._id === payload._id);
            cartItem.amount++;
            state.amount++;
            state.total += cartItem.price;
            saveCartItemsToLocalStorage(state.cartItems);
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item._id === payload._id);
            cartItem.amount--;
            state.amount--;
            state.total -= cartItem.price;
            saveCartItemsToLocalStorage(state.cartItems);
        },
    },
});

export const { clearCart, addItem, removeItem, increase, decrease } =
    cartSlice.actions;

export default cartSlice.reducer;