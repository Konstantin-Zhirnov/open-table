export type UsersStateType = {
  user: UserType | null;
  currentUser: number;
  isUserLoading: boolean;
};

export type UserType = {
  name: string;
  permissionList: string[];
  location: string;
};
