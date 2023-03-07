import api from '../api';

/////>>>STATE AUTH<<</////
interface IUser {
  email: string;
  token: string;
  username: string;
  password?: string;
  bio?: string;
  image?: string;
}

interface IError {
  errorMessage: string;
  errors: {
    'email or password': string;
    username?: string;
  };
}

export type LogIn = Record<'email' | 'password', string>;
export type SignUp = Record<'email' | 'password' | 'username', string>;

interface State<T, E> {
  loading: boolean;
  isError: E | null;
  user: T | null;
}

type Auth = IUser & SignUp & LogIn;
export type AuthState = State<Auth, IError>;

//responses

export interface UserResponse {
  user: IUser;
}

export interface IUpdateUser {
  user: UpdateProfile;
}

export interface INewUser {
  user: NewUser;
}

///>>>> THUNK AUTH <<<</////

export type NewUser = {
  username: string;
  email: string;
  token: string;
  password?: string;
};
export type NewUserRequest = {
  user: NewUser;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type LogInRequest = {
  user: LoginUser;
};

export type Profile = {
  email?: string;
  token?: string;
  username?: string;
  password?: string;
  bio?: string;
  image?: string;
};

export type UpdateProfileRequest = {
  user: Profile;
};

export type GeneralRequest = UpdateProfileRequest & LogInRequest & NewUserRequest;

// types of endpoints
export type Sign = typeof api.user.signup;
export type Login = typeof api.user.login;
export type UpdateProfile = typeof api.user.updateProfile;
export type RequestType = Sign | Login | UpdateProfile;

export interface IData {
  username: string;
  email: string;
  password: string;
  confirm: string;
  remember: boolean;
}

export type LoginType = Pick<IData, 'email' | 'password'>;

export type RegisterType = Pick<IData, 'email' | 'password' | 'username'>;
