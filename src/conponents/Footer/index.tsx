import React from "react";

import { useAppSelector } from "../../redux/hooks";
import { getCurrentRestaurant } from "../../redux/restaurants";
import { getOrder } from "../../redux/order";

import Total from "./Total";
import Checkout from "./Checkout";

import styles from "./Footer.module.scss";

const Footer: React.FC = React.memo(() => {
  const order = useAppSelector(getOrder);
  const currentRestaurant = useAppSelector(getCurrentRestaurant);

  const total = order
    .filter((item) => item.restaurant === currentRestaurant)
    .reduce((acc, current) => {
      acc = acc + current.count * current.price;
      return acc;
    }, 0);

  return (
    <div className={styles.container}>
      <Total total={total} />
      <Checkout total={total} />
    </div>
  );
});

export default Footer;
