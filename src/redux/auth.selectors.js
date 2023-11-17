import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

export const selectToken = createSelector(selectAuth, auth => auth.token);
export const selectAuthError = createSelector(selectAuth, auth => auth.error);
export const selectAuthUserData = createSelector(selectAuth, auth => auth.user);

export const selectAuthAuthenticated = createSelector(
  selectAuth,
  auth => auth.authenticated
);

export const selectAuthIsLoading = createSelector(
  selectAuth,
  auth => auth.isLoading
);
