import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setCurrentRestaurant,
  getCurrentRestaurant
} from "../../../redux/restaurants";

import styles from "./Restaurant.module.scss";

interface IProps {
  index: number;
  restaurant: string;
}

const Restaurant: React.FC<IProps> = React.memo(({ index, restaurant }) => {
  const dispatch = useAppDispatch();
  const currentRestaurant = useAppSelector(getCurrentRestaurant);

  const handleClick = () => {
    dispatch(setCurrentRestaurant(index));
  };

  const getClassName = () => {
    if (currentRestaurant === index) {
      return `${styles.container} ${styles.active}`;
    }
    return `${styles.container}`;
  };

  return (
    <button className={getClassName()} onClick={handleClick}>
      {restaurant}
    </button>
  );
});

export default Restaurant;
