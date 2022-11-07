import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGetUsers } from "../../redux/users/asyncActions";
import { getUsers, getUserLoading } from "../../redux/users";
import { getRestaurantLoading } from "../../redux/restaurants";

import Loader from "../Loader";

import styles from "./UserInformationBar.module.scss";

const UserInformationBar: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const restaurantLoading = useAppSelector(getRestaurantLoading);
  const userLoading = useAppSelector(getUserLoading);

  React.useEffect(() => {
    dispatch(fetchGetUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {(restaurantLoading || userLoading) && <Loader />}

      {users && (
        <>
          <div className={styles.name}>{users.name}</div>
          <div className={styles.location}>{users.location}</div>
        </>
      )}
    </div>
  );
});

export default UserInformationBar;
