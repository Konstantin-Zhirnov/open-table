import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getOrder, setOrder } from "../../../redux/order";
import { setModal } from "../../../redux/modal";
import { getCurrentRestaurant } from "../../../redux/restaurants";

import style from "./Checkout.module.scss";

interface IProps {
  total: number;
}

const Checkout: React.FC<IProps> = React.memo(({ total }) => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(getOrder);
  const currentRestaurant = useAppSelector(getCurrentRestaurant);

  const handleClick = () => {
    dispatch(
      setOrder(order.filter((item) => item.restaurant !== currentRestaurant))
    );
    dispatch(setModal(true));
  };

  const getDisable = () => {
    return !total;
  };

  return (
    <div className={style.container}>
      <button onClick={handleClick} disabled={getDisable()}>
        Checkout
      </button>
    </div>
  );
});

export default Checkout;
