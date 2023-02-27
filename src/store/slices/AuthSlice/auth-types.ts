import api from '../../../api';

/////>>>STATE AUTH<<</////
export type User = {
  email: string;
  token: string;
  username: string;
  password?: string;
  bio?: string;
  image?: string;
};
export interface UserResponse {
  user: User;
}
export interface State {
  loading: boolean;
  user: User | null;
  isError: string;
}

export interface ISignUp {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export interface ILogin {
  user: {
    email: string;
    password: string;
  };
}

export interface IUpdateUser {
  user: UpdateProfile;
}

export interface INewUser {
  user: NewUser;
}

export type AuthState = ISignUp | ILogin | IUpdateUser | INewUser;

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
export type SignUp = typeof api.user.signup;
export type Login = typeof api.user.login;
export type UpdateProfile = typeof api.user.updateProfile;
export type RequestType = SignUp | Login | UpdateProfile;
