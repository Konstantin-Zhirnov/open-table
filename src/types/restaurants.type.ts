export type RestaurantsStateType = {
  shortInfo: ShortInfoType[];
  menus: MenuType[][];
  currentRestaurant: number;
  isRestaurantsLoading: boolean;
};

export type ShortInfoType = {
  name: string;
  img: string;
};

export type RestaurantType = {
  name: string;
  img: string;
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
