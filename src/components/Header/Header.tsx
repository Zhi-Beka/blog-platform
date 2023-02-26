import { Link, useNavigate } from 'react-router-dom';
import style from './Header.module.scss';
import avatar from '../../assets/avatar.png';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logOutAuth } from '../../store/action-creators/authUsers';
import { reset } from '../../store/reducers/AuthSlice';

const Header = () => {
  const login = useAppSelector((state) => state.authReducer.success);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const active = classNames({
    [style.active]: login,
  });
  const logOut = classNames({
    [style.logOut]: login,
    [style.login]: !login,
  });

  const logOutBtn = () => {
    dispatch(logOutAuth());
    dispatch(reset());
    navigate('/');
  };
  return (
    <header className={style.header}>
      <Link to='/articles'>
        <p>RealWorld Blog</p>
      </Link>
      <div className={style.header__link}>
        <Link to={login ? 'new' : 'sign-in'} className={active}>
          {login ? 'Create article' : 'Sign In'}
        </Link>

        {login && (
          <Link to='profile' className={style.profile}>
            John Doe
            <img src={avatar} />
          </Link>
        )}
        {login && (
          <button className={logOut} onClick={logOutBtn}>
            Log Out
          </button>
        )}

        {!login && <Link to='sign-up'>Sign Up</Link>}
      </div>
    </header>
  );
};

export default Header;
