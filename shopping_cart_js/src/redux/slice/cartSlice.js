import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
        },
        // removeItemFromCart: 
        // Other reducers like removeItemFromCart, clearCart, etc.
    },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
