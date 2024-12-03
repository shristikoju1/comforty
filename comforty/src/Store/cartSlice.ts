
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAdd = action.payload;
      const quantityToAdd = itemToAdd.quantity || 1;
      const existingItemIndex = state.items.findIndex(item => item.id === itemToAdd.id);
    
      if (existingItemIndex !== -1) {
        // If item already exists, increase the quantity
        state.items[existingItemIndex].quantity += quantityToAdd;
      } else {
        // Otherwise, add the item to the cart with the specified quantity
        state.items.push({ ...itemToAdd, quantity: quantityToAdd });
      }
    
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
  }});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
