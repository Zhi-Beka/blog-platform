import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import LoggedNav from '../../hoc/LoggedNav';
import { article } from '../../routes/route-const';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to={article}>
        <h2>RealWorld Blog</h2>
      </Link>
      <nav className={style.header__link}>
        <LoggedNav />
      </nav>
    </header>
  );
};

export default Header;
