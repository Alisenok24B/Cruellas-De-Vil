import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const JWT_PERSISTENT_STATE = "userData";

export interface userPersistantState {
  jwt: string | null;
  role: string | null;
  id: number | null;
}

export interface userState {
  jwt: string | null;
  role: string | null;
  id: number | null;
}

const initialState: userState = {
  jwt: loadState<userPersistantState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  role: null,
  id: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
      state.role = null;
      state.id = null;
    },
    setSession: (
      state,
      action: PayloadAction<{ id: number; role: string }>
    ) => {
      state.role = action.payload.role;
      state.id = action.payload.id;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
