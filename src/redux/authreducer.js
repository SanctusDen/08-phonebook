import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  requestLogin,
  requestLogout,
  requestRefreshUser,
  requestRegister,
  setToken,
} from 'services/getApi';

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

export const refreshrThunk = createAsyncThunk(
  `auth/refresh`,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const authData = await requestRefreshUser();
      console.log('authData', authData);
      return authData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const logOutThunk = createAsyncThunk(
  `auth/logout`,
  async (_, thunkAPI) => {
    try {
      await requestLogout();
      console.log('requestLogout', requestLogout);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE_AUTH = {
  token: null,
  user: { email: null, name: null },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE_AUTH,

  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(refreshrThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })

      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE_AUTH;
      })
      .addMatcher(
        isAnyOf(
          logOutThunk.pending,
          registerThunk.pending,
          loginThunk.pending,
          refreshrThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logOutThunk.rejected,
          registerThunk.rejected,
          loginThunk.rejected,
          refreshrThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setFilter } = authSlice.actions;

export const authreducer = authSlice.reducer;
