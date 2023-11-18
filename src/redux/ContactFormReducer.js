import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = action.payload;
      })

      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = [action.payload, ...state.contacts.items];
      })

      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          c => c.id !== action.payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          deleteContacts.pending,
          requestContacts.pending,
          addContacts.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteContacts.rejected,
          requestContacts.rejected,
          addContacts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setFilter } = contactsFormSlice.actions;

export const ContactFormReducer = contactsFormSlice.reducer;
