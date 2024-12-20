import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import { URLs } from "../__data__/urls";

export const JWT_PERSISTENT_STATE = "userData";

export interface userPersistentState {
  isAuthenticated: string | null;
  userRole: string | null;
  id: number | null;
}

export interface userState {
  isAuthenticated: string | null;
  userRole: string | null;
  id: number | null;
}

const initialState: userState = {
  isAuthenticated:
    loadState<userPersistentState>(JWT_PERSISTENT_STATE)?.isAuthenticated ??
    null,
  userRole:
    loadState<userPersistentState>(JWT_PERSISTENT_STATE)?.userRole ?? null,
  id: loadState<userPersistentState>(JWT_PERSISTENT_STATE)?.id ?? null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (
      state,
      action: PayloadAction<{
        isAuthenticated: string;
        userRole: string;
        id: number;
      }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userRole = action.payload.userRole;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.isAuthenticated = null;
      state.userRole = null;
      state.id = null;
    },
  },
});

export default userSlice;
export const userActions = userSlice.actions;
