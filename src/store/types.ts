interface IUser {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface IState {
  loading: boolean;
  users: IUser[];
  error: boolean | string;
}
