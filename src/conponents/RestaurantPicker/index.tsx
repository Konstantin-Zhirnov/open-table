import React from "react";

import { useAppSelector } from "../../redux/hooks";
import {getRestaurantsShortInfo} from "../../redux/restaurants";

import Restaurant from "./Restaurant";

import styles from "./RestaurantPicker.module.scss";

const RestaurantPicker: React.FC = React.memo(() => {
  const shortInfo = useAppSelector(getRestaurantsShortInfo);

  return (
    <div className={styles.container}>
      {Boolean(shortInfo.length) &&
          shortInfo.map((restaurant, index) => (
          <Restaurant key={index} index={index} restaurant={restaurant} />
        ))}
    </div>
  );
});

export default RestaurantPicker;
