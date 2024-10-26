import { RootState } from "../store.js";

const selectAuth = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => selectAuth(state).user;

export const selectIsUserLoggedIn = (state: RootState) =>
  selectAuth(state).isAuthenticated;
export const selectUserToken = (state: RootState) => selectAuth(state).token;
