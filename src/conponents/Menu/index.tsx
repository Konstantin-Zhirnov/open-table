import React from "react";

import { useAppSelector } from "../../redux/hooks";
import {
  getRestaurantsMenus,
  getCurrentRestaurant
} from "../../redux/restaurants";

import MenuItem from "./MenuItem";

import styles from "./Menu.module.scss";

const Menu: React.FC = React.memo(() => {
  const restaurantsMenus = useAppSelector(getRestaurantsMenus);
  const currentRestaurant = useAppSelector(getCurrentRestaurant);

  if (!restaurantsMenus[currentRestaurant]?.length) return null;

  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <ul>
        {restaurantsMenus[currentRestaurant].map((item, index) => (
          <MenuItem key={index} name={item?.name} price={item?.price} />
        ))}
      </ul>
    </div>
  );
});

export default Menu;
