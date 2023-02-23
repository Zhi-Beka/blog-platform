import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to='/articles'>
        <h4>RealWorld Blog</h4>
      </Link>
      <div className={style.header__link}>
        <Link to='sign-in'>Sign In</Link>
        <Link to='login'>Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
