import React from "react";

import { useAppSelector } from "../../redux/hooks";
import { getRestaurantsNames } from "../../redux/restaurants";

import Restaurant from "./Restaurant";

import styles from "./RestaurantPicker.module.scss";

const RestaurantPicker: React.FC = React.memo(() => {
  const restaurantsNames = useAppSelector(getRestaurantsNames);

  return (
    <div className={styles.container}>
      {restaurantsNames &&
        restaurantsNames.map((restaurant, index) => (
          <Restaurant key={index} index={index} restaurant={restaurant} />
        ))}
    </div>
  );
});

export default RestaurantPicker;
