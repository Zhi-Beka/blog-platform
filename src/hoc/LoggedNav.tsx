import { FC } from 'react';
import AuthNav from '../components/Header/AuthNav/AuthNav';
import UnAuthNav from '../components/Header/UnAuthNav/UnAuthNav';
import { useAppSelector } from '../hooks/redux';

const LoggedNav: FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  return user ? <AuthNav /> : <UnAuthNav />;
};

export default LoggedNav;
