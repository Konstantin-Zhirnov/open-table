import React from "react";

import { useAppSelector } from "../../redux/hooks";
import { getOrder } from "../../redux/order";
import { getCurrentRestaurant } from "../../redux/restaurants";

import OrderItem from "./OrderItem";

import styles from "./Order.module.scss";

const Order: React.FC = React.memo(() => {
  const order = useAppSelector(getOrder);
  const currentRestaurant = useAppSelector(getCurrentRestaurant);

  return (
    <div className={styles.container}>
      <h2>Order</h2>
      <ul>
        {order
          .filter((item) => item.restaurant === currentRestaurant)
          .map((o, index) => (
            <OrderItem
              key={index}
              name={o.name}
              count={o.count}
              currentRestaurant={currentRestaurant}
            />
          ))}
      </ul>
    </div>
  );
});

export default Order;
