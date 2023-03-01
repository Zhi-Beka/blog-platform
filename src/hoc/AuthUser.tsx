import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthUserProps {
  children: JSX.Element;
}

const AuthUser: FC<AuthUserProps> = ({ children }) => {
  const isLogged = localStorage.getItem('isLogged');

  return isLogged ? <Navigate to='/' replace /> : children;
};

export default AuthUser;
