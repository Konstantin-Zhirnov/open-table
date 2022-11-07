import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchGetRestaurants } from "./asyncActions";
import { RestaurantsStateType, MenuType } from "../../types/restaurants.type";
import { RootState } from "../store";

const initialState: RestaurantsStateType = {
  names: [],
  menus: [],
  currentRestaurant: 0,
  isRestaurantsLoading: false
};

function pendingRestaurants(state: RestaurantsStateType) {
  state.isRestaurantsLoading = true;
}

export const restaurants = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action: PayloadAction<number>) => {
      state.currentRestaurant = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetRestaurants.pending, pendingRestaurants)
      .addCase(fetchGetRestaurants.fulfilled, (state, action) => {
        const names: string[] = [];
        const menus: MenuType[][] = [];
        action.payload?.restaurants.forEach((item) => {
          names.push(item.name);
          menus.push(item.menu);
        });
        state.names = names;
        state.menus = menus;
        state.isRestaurantsLoading = false;
      })
      .addCase(fetchGetRestaurants.rejected, (state, action) => {
        state.isRestaurantsLoading = false;
      });
  }
});

export const { setCurrentRestaurant } = restaurants.actions;

export const getRestaurantsNames = (state: RootState): string[] =>
  state.restaurants.names;
export const getRestaurantsMenus = (state: RootState): MenuType[][] =>
  state.restaurants.menus;
export const getCurrentRestaurant = (state: RootState): number =>
  state.restaurants.currentRestaurant;
export const getRestaurantLoading = (state: RootState): boolean =>
  state.restaurants.isRestaurantsLoading;

export default restaurants.reducer;
