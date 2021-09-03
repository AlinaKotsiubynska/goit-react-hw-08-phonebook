import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsAll,
  deleteContact,
  addContact,
} from 'redux/thunks/contactsThunks';
import { filterToDelete } from 'utils';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: true,
    error: null,
  },
  extraReducers: {
    [getContactsAll.pending]: state => {
      state.loading = true;
    },
    [getContactsAll.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    [getContactsAll.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deleteContact.pending]: state => {
      state.loading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = filterToDelete(state.items, payload);
      state.loading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addContact.pending]: state => {
      state.loading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.loading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    'auth/logout/fulfilled': state => {
      state.items = [];
    },
  },
});

export default contactsSlice.reducer;
