import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from 'redux/slices/contactsSlice';
import filterReducer from 'redux/slices/filterSlice';
import authReducer from 'redux/slices/authSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
