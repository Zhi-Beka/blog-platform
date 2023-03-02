import React, { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const isLogged = localStorage.getItem('isLogged');

  return isLogged ? children : <Navigate to='/sign-in' state={{ from: location }} />;
};
export default RequireAuth;
