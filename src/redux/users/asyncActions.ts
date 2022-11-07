import { createAsyncThunk } from "@reduxjs/toolkit";

import { UsersApi } from "../../api/Users.api";

export const fetchGetUsers = createAsyncThunk(
  "users/fetchGetUsers",
  async function (_, { rejectWithValue }) {
    try {
      return await UsersApi.getUser();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
