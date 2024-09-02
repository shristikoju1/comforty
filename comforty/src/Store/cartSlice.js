
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAdd = { ...action.payload, quantity: 1 };
      state.items.push(itemToAdd);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
    updateItemQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      if (quantity > 0) {
        state.items[index].quantity = quantity;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
