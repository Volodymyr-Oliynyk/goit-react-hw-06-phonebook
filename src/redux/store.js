import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contacts';
import middleware from './middleware';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
