import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://650a25aef6553137159c75ef.mockapi.io",
  headers: { "content-type": "application/json" },
});

export const allCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/adverts");
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const allFavorites = createAsyncThunk(
  "favorites/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/favorites");
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const addFavorite = createAsyncThunk(
  "favorite/addFavorives",
  async (body, thunkApi) => {
    try {
      const { data } = await instance.post("/favorites", body);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorite/deleteFavorives",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/favorites/${id}`);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
