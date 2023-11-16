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
      const userData = await requestRegister(formData);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  token: null,
  user: { email: null, name: null },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = authSlice.actions;

export const authReducer = authSlice.reducer;
