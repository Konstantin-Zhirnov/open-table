import { configureStore } from "@reduxjs/toolkit";

import restaurantsReducer from "./restaurants";
import usersReducer from "./users";
import orderReducer from "./order";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    users: usersReducer,
    order: orderReducer,
    modal: modalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
