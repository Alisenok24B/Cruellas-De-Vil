import { configureStore } from "@reduxjs/toolkit";
import {
  JWT_PERSISTENT_STATE,
  userSlice,
} from "./user.slice";
import { saveState } from "./storage";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

store.subscribe(() => {
  saveState(
    {
      isAuthenticated: store.getState().user.isAuthenticated,
      userRole: store.getState().user.userRole,
      id: store.getState().user.id,
    },
    JWT_PERSISTENT_STATE
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
