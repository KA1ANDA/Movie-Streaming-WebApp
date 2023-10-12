import { configureStore } from "@reduxjs/toolkit";
import profileSlice from './Slices/profileSlice'
import movieSlice from './Slices/movieSlice'
import { api } from "./API/api";

export const store = configureStore({
  reducer:{
    movieSlice,
    profileSlice,
    [api.reducerPath]:api.reducer,
  },

  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})