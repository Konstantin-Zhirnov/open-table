import { createSlice } from "@reduxjs/toolkit";

import { fetchGetUsers } from "./asyncActions";
import { UsersStateType, UserType } from "../../types/users.type";
import { RootState } from "../store";

const initialState: UsersStateType = {
  user: null,
  currentUser: 0,
  isUserLoading: false
};

function pendingUsers(state: UsersStateType) {
  state.isUserLoading = true;
}

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUsers.pending, pendingUsers)
      .addCase(fetchGetUsers.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isUserLoading = false;
      })
      .addCase(fetchGetUsers.rejected, (state, action) => {
        state.isUserLoading = false;
      });
  }
});

export const getUsers = (state: RootState): UserType | null => state.users.user;
export const getUserLoading = (state: RootState): boolean =>
  state.users.isUserLoading;

export default users.reducer;
