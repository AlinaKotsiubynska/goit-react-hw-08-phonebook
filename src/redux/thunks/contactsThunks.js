import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsAllFetch,
  deleteContactFetch,
  addContactFetch,
} from 'utils/contactsApi';

export const getContactsAll = createAsyncThunk(
  'contacts/getAll',
  getContactsAllFetch,
);

export const deleteContact = createAsyncThunk('contacts/delete', async id =>
  deleteContactFetch(id),
);

export const addContact = createAsyncThunk('contacts/add', async contact =>
  addContactFetch(contact),
);
