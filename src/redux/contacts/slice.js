import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './operations';
import { createSelector } from 'reselect';
import { logoutThunk } from '../auth/operations';

export const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfieldGetAllContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const handleFulfieldAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

const handleFulfieldDeleteContact = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== action.payload.id)

};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfieldGetAllContacts)
      .addCase(addContact.fulfilled, handleFulfieldAddContact)
      .addCase(deleteContact.fulfilled, handleFulfieldDeleteContact)
      .addCase(logoutThunk.fulfilled, () => contactInitialState)
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          handleRejected(state, action.payload);
        }
      );
  },
});

// * ********************************************** *//

export const selectContactsList = state => state.contacts.items;
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return filter ? contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
      : contacts.items
  }
);

export const contactsReducer = contactsSlice.reducer;
