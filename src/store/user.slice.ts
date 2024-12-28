import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import { URLs } from "../__data__/urls";

export const JWT_PERSISTENT_STATE = "userData";

export interface userPersistentState {
  isAuthenticated: boolean | null;
  userRole: string | null;
  id: number | null;
  firstName: string | null;
  lastName: string | null;
}

export interface userState {
  isAuthenticated: boolean | null;
  userRole: string | null;
  id: number | null;
  firstName: string | null; // Добавлено
  lastName: string | null; 
}

const initialState: userState = {
  isAuthenticated:
    loadState<userPersistentState>(JWT_PERSISTENT_STATE)?.isAuthenticated ??
    null,
  userRole:
    loadState<userPersistentState>(JWT_PERSISTENT_STATE)?.userRole ?? null,
  id: loadState<userPersistentState>(JWT_PERSISTENT_STATE)?.id ?? null,
  firstName: null, // Изначально null
  lastName: null,  // Изначально null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
        userRole: string;
        id: number;
        firstName: string;
        lastName: string;
      }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userRole = action.payload.userRole;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    updateJwt: (
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
      }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
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
