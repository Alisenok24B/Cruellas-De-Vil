import { configureStore } from "@reduxjs/toolkit";
import { JWT_PERSISTENT_STATE, userSlice } from "./user.slice";
import { apiSlice } from "./api/apiSlice";
import { saveState } from "./storage";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // Подключение редьюсера apiSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Подключение middleware RTK Query
});

// Сохранение пользовательских данных в localStorage
store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt },
    JWT_PERSISTENT_STATE
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
