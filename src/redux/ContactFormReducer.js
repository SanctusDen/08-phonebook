import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContacts,
  fetchAllContacts,
  fetchDeleteContacts,
} from 'services/getApi';

export const requestContacts = createAsyncThunk(
  `contacts/getAll`,
  async (_, thunkAPI) => {
    try {
      const contactsAll = await fetchAllContacts();
      return contactsAll;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  `contacts/add`,
  async (newContact, thunkAPI) => {
    try {
      const contactsAdd = await fetchAddContacts(newContact);
      return contactsAdd;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  `contacts/delete`,
  async (contactsId, thunkAPI) => {
    try {
      const deletedContact = await fetchDeleteContacts(contactsId);
      return deletedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsFormSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(requestContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          c => c.id !== action.payload.id
        );
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = contactsFormSlice.actions;

export const ContactFormReducer = contactsFormSlice.reducer;
