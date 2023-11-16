import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestLogin, requestRegister } from 'services/swaggerApi';

export const loginThunk = createAsyncThunk(
  `auth/login`,
  async (formData, thunkAPI) => {
    try {
      const res = await requestLogin(formData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  `auth/register`,
  async (formData, thunkAPI) => {
    try {
      const res = await requestRegister(formData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

const contactsFormSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => builder,
});

export const { setFilter } = contactsFormSlice.actions;

export const ContactFormReducer = contactsFormSlice.reducer;
