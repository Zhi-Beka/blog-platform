import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import avatar from '../../assets/avatar.png';
import classNames from 'classnames';

const Header = () => {
  const login = true;
  const active = classNames({
    [style.active]: login,
  });
  const logOut = classNames({
    [style.logOut]: login,
    [style.login]: !login,
  });
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

        <Link to={login ? 'articles' : 'sign-up'} className={logOut}>
          {login ? 'Log Out' : 'Sign Up'}
        </Link>
      </div>
    </header>
  );
};

export default Header;
