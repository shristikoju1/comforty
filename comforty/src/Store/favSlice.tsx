import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addItemToFav: (state, action) => {
      const itemToAdd = action.payload;
      const itemExists = state.items.find((item) => item.id === itemToAdd.id);

      if (!itemExists) {
        state.items.push(itemToAdd);
      }
    },
    removeItemFromFav: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItemToFav, removeItemFromFav } = favSlice.actions;

export default favSlice.reducer;
