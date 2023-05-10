import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getAllApi } from "../services/ApiCalling";

export const store = configureStore({
  reducer: {
    [getAllApi.reducerPath]: getAllApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllApi.middleware),
});

setupListeners(store.dispatch);
