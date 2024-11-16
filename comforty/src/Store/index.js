import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';
import favReducer from './favSlice';
import profileReducer from './profileSlice';
import authReducer from './authSlice';

// Redux Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers because redux-persist expects a single reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  fav: favReducer,
  profile: profileReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with middleware to ignore non-serializable values
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable actions for redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
