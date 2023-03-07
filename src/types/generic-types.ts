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
  errors?: {
    'email or password': string;
  };
}

type LogIn = Record<'email' | 'password', string>;
type SignUp = Record<'email' | 'password' | 'username', string>;

interface State<T, E> {
  loading: boolean;
  isError: E | null;
  user: T | null;
}

type Auth = IUser & SignUp & LogIn;
export type AuthState = State<Auth, IError>;
