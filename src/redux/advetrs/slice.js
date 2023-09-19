import { createSlice } from "@reduxjs/toolkit";
import { allCars, patchFavorite } from "./operation";
import { handelFulfilled, handelPending, handelReject } from "./function";

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const arrayThunks = [allCars, patchFavorite];

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    arrayThunks.forEach((fetch) => {
      builder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, handelReject)
        .addCase(fetch.fulfilled, handelFulfilled);
    });
  },
});
export const advertsReducer = advertsSlice.reducer;
