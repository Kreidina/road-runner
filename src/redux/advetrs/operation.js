import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://65048c47c8869921ae252b26.mockapi.io",
});

export const allCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/advert");
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const patchFavorite = createAsyncThunk(
  "favorite/patch",
  async ({ id, body }, thunkApi) => {
    try {
      const { data } = await instance.patch(`/advert/${id}`, body);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
