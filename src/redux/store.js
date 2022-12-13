import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "./data";

const store = configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});

export default store;
