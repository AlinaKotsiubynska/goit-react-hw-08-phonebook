import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from 'redux/slices/contactsSlice';
import filterReducer from 'redux/slices/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
console.log(persistor);

export const persistedStore = { store, persistor };
