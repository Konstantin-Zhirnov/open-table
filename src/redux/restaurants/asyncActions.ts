import { createAsyncThunk } from "@reduxjs/toolkit";

import { RestaurantsApi } from "../../api/Restaurants.api";

export const fetchGetRestaurants = createAsyncThunk(
  "users/fetchGetRestaurants",
  async function (_, { rejectWithValue }) {
    try {
      return await RestaurantsApi.getRestaurants();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
