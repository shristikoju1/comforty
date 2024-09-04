

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';
import favReducer from './favSlice';

const persistConfig = {
  key: 'root',
  storage,
};

// used combine reducer because redux persist expected an reducer and i need a single reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  fav: favReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
