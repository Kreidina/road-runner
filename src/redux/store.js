import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./advetrs/slice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
