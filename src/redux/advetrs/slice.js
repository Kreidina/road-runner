import { createSlice } from "@reduxjs/toolkit";

import {
  addFavorite,
  allCars,
  allFavorites,
  deleteFavorite,
} from "./operation";
import {
  handelFulfilled,
  handelPending,
  handelReject,
  handelAddFav,
  handelDelete,
  handelAllFav,
} from "./function";

const initialState = {
  adverts: [],
  favorites: [],
  isLoading: false,
};

const arrayThunks = [allCars, allFavorites, addFavorite, deleteFavorite];

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    arrayThunks.forEach((fetch) => {
      builder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, handelReject)
        .addCase(fetch.fulfilled, (state, action) => {
          switch (fetch) {
            case allCars:
              handelFulfilled(state, action);
              break;
            case allFavorites:
              handelAllFav(state, action);
              break;

            case addFavorite:
              handelAddFav(state, action);
              break;
            case deleteFavorite:
              handelDelete(state, action);
              break;
            default:
              break;
          }
        });
    });
  },
});
export const advertsReducer = advertsSlice.reducer;
