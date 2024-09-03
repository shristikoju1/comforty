
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import favReducer from './favSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },
});

export default store;
