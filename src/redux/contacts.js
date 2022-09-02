import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    filterContacts(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addContact, deleteContact, filterContacts } = contacts.actions;

export const getContactValue = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};

export const persistedReducer = persistReducer(persistConfig, contacts.reducer);
