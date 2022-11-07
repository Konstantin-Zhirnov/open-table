export type RestaurantsStateType = {
  names: string[];
  menus: MenuType[][];
  currentRestaurant: number;
  isRestaurantsLoading: boolean;
};

export type RestaurantType = {
  name: string;
  access: string;
  id: number;
  menu: MenuType[];
};

export type RestaurantResponseType = {
  restaurants: RestaurantType[];
};

export type MenuType = {
  name: string;
  price: number;
  id: number;
};

export type ReturnType = string[] | MenuType[];
