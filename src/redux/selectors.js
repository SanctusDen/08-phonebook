// import { createSelector } from '@reduxjs/toolkit';
// import { rootReducers } from './store';

// const selectRoot = createSelector(rootReducers, state => state.contacts);

// export const selectFilter = (selectRoot, contacts => contacts.filter);

// export const selectContacts = createSelector(
//   selectRoot,
//   contacts => contacts.contacts.items
// );

// export const selectIsLoading = createSelector(
//   selectRoot,
//   contacts => contacts.contacts.isLoading
// );

// export const selectError = createSelector(
//   selectRoot,
//   contacts => contacts.contacts.error
// );

import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.contacts.filter;
export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
