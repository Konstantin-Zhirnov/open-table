import React from "react";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchGetRestaurants } from "./redux/restaurants/asyncActions";
import { getModal } from "./redux/modal";

import UserInformationBar from "./conponents/UserInformationBar";
import RestaurantPicker from "./conponents/RestaurantPicker";
import Menu from "./conponents/Menu";
import Order from "./conponents/Order";
import Footer from "./conponents/Footer";
import Modal from "./conponents/Modal";

import styles from "./App.module.scss";

export default function App() {
  const dispatch = useAppDispatch();
  const isModal = useAppSelector(getModal);

  React.useEffect(() => {
    dispatch(fetchGetRestaurants());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <UserInformationBar />

      <RestaurantPicker />

      <div className={styles.content}>
        <Menu /> <Order />
      </div>

      <Footer />

      {isModal && <Modal text="Order submitted!" />}
    </div>
  );
}
