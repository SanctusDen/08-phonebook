import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authreducer } from './authreducer';

import { ContactFormReducer } from './ContactFormReducer';

const contactFormConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducers = {
  contacts: persistReducer(contactFormConfig, ContactFormReducer),
  auth: persistReducer(authConfig, authreducer),
};

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
