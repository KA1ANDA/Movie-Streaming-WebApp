import { configureStore } from "@reduxjs/toolkit";
import profileSlice from './Slices/profileSlice'
import { api } from "./api";

export const store = configureStore({
  reducer:{
    profileSlice,
    [api.reducerPath]:api.reducer,
  },

  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})