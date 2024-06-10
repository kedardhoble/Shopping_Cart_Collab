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
        }
        // Other reducers like clearCart, etc.
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const selectCartTotalQuantity = (state) => state.cartData.items.length;
export default cartSlice.reducer;
