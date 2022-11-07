import { apiConfig } from "./index";
import { RestaurantResponseType } from "../types/restaurants.type";

export const RestaurantsApi = {
  getRestaurants(): Promise<RestaurantResponseType> {
    return fetch(apiConfig.restaurants)
      .then((response) => response.json())
      .then((data) => data);
  }
};
