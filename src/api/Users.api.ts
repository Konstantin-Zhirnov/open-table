import { apiConfig } from "./index";
import { UserType } from "../types/users.type";

export const UsersApi = {
  getUser(): Promise<UserType> {
    return fetch(apiConfig.users)
      .then((response) => response.json())
      .then((data) => data);
  }
};
