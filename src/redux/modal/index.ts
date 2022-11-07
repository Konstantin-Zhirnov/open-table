import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalStateType } from "../../types/modal.type";
import { RootState } from "../store";

const initialState: ModalStateType = {
  isModal: false
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload;
    }
  }
});

export const { setModal } = modal.actions;

export const getModal = (state: RootState): boolean => state.modal.isModal;

export default modal.reducer;
