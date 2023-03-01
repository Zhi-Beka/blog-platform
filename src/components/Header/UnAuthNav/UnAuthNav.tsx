import { Link } from 'react-router-dom';
import style from './UnAuthNav.module.scss';

const UnAuthNav = () => {
  return (
    <>
      <Link to='sign-in'>Sign In</Link>
      <Link to='sign-up' className={style.signup}>
        Sign Up
      </Link>
    </>
  );
};

export default UnAuthNav;
