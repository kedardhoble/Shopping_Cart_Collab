import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('cartData', JSON.stringify(state.items));
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cartData', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cartData');
        }
    },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cartData.items;
export const selectCartTotalQuantity = (state) => state.cartData.items.length;
export const getCartPrice = (state) => {
    return state.cartData.items.reduce((total, item) => total + item.price, 0);
};

export default cartSlice.reducer;
