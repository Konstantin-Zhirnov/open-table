import React from "react";

import styles from "./OrderItem.module.scss";

interface IProps {
  name: string;
  count: number;
  currentRestaurant: number;
}

const OrderItem: React.FC<IProps> = React.memo(
  ({ name, count }) => {
    return (
      <li className={styles.container}>
        {name} - <span>{count}</span>
      </li>
    );
  }
);

export default OrderItem;
