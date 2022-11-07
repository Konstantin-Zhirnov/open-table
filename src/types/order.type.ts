export type OrderStateType = {
  order: OrderType[];
};

export type OrderType = {
  name: string;
  price: number;
  count: number;
  restaurant: number;
};
