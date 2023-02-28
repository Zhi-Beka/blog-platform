import { Link, useNavigate } from 'react-router-dom';
import style from './Header.module.scss';
import avatar from '../../assets/avatar.png';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logOut } from '../../store/slices/AuthSlice/AuthSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const login = localStorage.getItem('isLogged'); //for saving auth header style
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const active = classNames({
    [style.active]: login,
  });
  const logOutStyle = classNames({
    [style.logOut]: login,
    [style.login]: !login,
  });

  const logOutBtn = () => {
    dispatch(logOut());
    toast.success('You are logged out');
    setTimeout(() => {
      navigate('/');
    }, 500);
  };
  const createArticleBtn = <Link to='new-article'>Create article</Link>;

  return (
    <header className={style.header}>
      <Link to='/articles'>
        <p>RealWorld Blog</p>
      </Link>
      <div className={style.header__link}>
        <Link to={login ? 'new' : 'sign-in'} className={active}>
          {login ? createArticleBtn : 'Sign In'}
        </Link>

        {login && (
          <Link to='profile' className={style.profile}>
            {user?.username}
            <div className={style.image}>
              <img src={user ? user.image : avatar} />
            </div>
          </Link>
        )}
        {login && (
          <button className={logOutStyle} onClick={logOutBtn}>
            Log Out
          </button>
        )}

        {!login && <Link to='sign-up'>Sign Up</Link>}
      </div>
    </header>
  );
};

export default Header;
