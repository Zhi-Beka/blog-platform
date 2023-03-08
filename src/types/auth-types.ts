import api from '../api';

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
export type NewUser = Omit<IUser, 'bio' | 'image'>;
export type Profile = Partial<IUser>;

interface State<T, E> {
  loading: boolean;
  isError: E | null;
  user: T | null;
}

type Auth = IUser & SignUp & LogIn;
export type AuthState = State<Auth, IError>;

//responses

interface IResponses<T> {
  user: T;
}

export type UserResponse = IResponses<IUser>;
export type IUpdateUser = IResponses<UpdateProfile>;
export type INewUser = IResponses<NewUser>;

///>>>> THUNK AUTH <<<</////

export type NewUserRequest = IResponses<NewUser>;
export type LogInRequest = IResponses<LogIn>;
export type UpdateProfileRequest = IResponses<Profile>;

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
