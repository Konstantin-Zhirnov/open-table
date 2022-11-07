import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getCurrentRestaurant } from "../../../redux/restaurants";
import { setOrder, getOrder } from "../../../redux/order";

import { OrderType } from "../../../types/order.type";

import styles from "./MenuItem.module.scss";

interface IProps {
  name: string;
  price: number;
}

const MenuItem: React.FC<IProps> = React.memo(({ name, price }) => {
  const dispatch = useAppDispatch();
  const currentRestaurant = useAppSelector(getCurrentRestaurant);
  const order = useAppSelector(getOrder);

  const handleClick = () => {
    const temp: OrderType[] = [];
    const current = order.find(
      (item) => item.name === name && item.restaurant === currentRestaurant
    );

    if (current) {
      temp.push(
        ...order.map((item) => {
          if (item.name === name && item.restaurant === currentRestaurant) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    } else {
      temp.push(...order, {
        name,
        price,
        count: 1,
        restaurant: currentRestaurant
      });
    }

    dispatch(setOrder(temp));
  };

  if (!name || !price) return null;

  return (
    <li className={styles.container}>
      <button onClick={handleClick}>
        <span>&#10004;</span>
        {name} - {price}
      </button>
    </li>
  );
});

export default MenuItem;
