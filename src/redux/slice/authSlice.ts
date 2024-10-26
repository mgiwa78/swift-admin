// AuthSlice.ts
import { createSelector, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import IRole from "../../types/role";

export interface Auth {
  token: string | null;
  user: any;
  role: IRole | null;
  permissions: any;
  isAuthenticated: boolean;
}

const initialState: Auth = {
  user: undefined,
  token: "",
  role: null,
  permissions: [""],
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCredentials(state, action: PayloadAction<any>) {
      state.isAuthenticated = true;
      state.user = action.payload.userAuth;
      state.token = action.payload.userJwt;
    },
    setToken(state, action: PayloadAction<any>) {
      state.token = action.payload;
    },
    setUserRole(state, action: PayloadAction<any>) {
      state.role = action.payload.role;
    },
    setUserPermissions(state, action: PayloadAction<any>) {
      state.permissions = action.payload;
    },
    removeCredentials(state) {
      state.isAuthenticated = false;
      state.user = undefined;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  setCredentials,
  removeCredentials,
  setToken,
  setUserPermissions,
  setUserRole,
} = authSlice.actions;
export default authSlice.reducer;
