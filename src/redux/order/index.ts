import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OrderStateType, OrderType } from "../../types/order.type";
import { RootState } from "../store";

const initialState: OrderStateType = {
  order: []
};

export const order = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderType[]>) => {
      state.order = action.payload;
    }
  }
});

export const { setOrder } = order.actions;

export const getOrder = (state: RootState): OrderType[] => state.order.order;

export default order.reducer;
