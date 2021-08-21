import { combineReducers } from 'redux';
import contactsReducer from 'redux/slices/contactsSlice';
import filterReducer from 'redux/slices/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
