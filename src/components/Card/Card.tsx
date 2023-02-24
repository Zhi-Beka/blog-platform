import style from './Card.module.scss';
import like from '../../assets/heart.png';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { IUser } from '../../types/userTypes';

const Card = (props: IUser) => {
  const { createdAt, author, tagList, title, favoritesCount, description, slug = undefined } = props;
  const tags = tagList?.map((el: string, index: number) => <p key={index}>{el}</p>);
  return (
    <div className={style.card}>
      <div className={style.card__content}>
        <div className={style.header}>
          <Link to={slug ? `/articles/${slug}` : '/articles'}>
            <h2 className={style.header__title}>{title}</h2>
          </Link>

          <button className={style.header__like}>
            <img src={like} />
            {favoritesCount}
          </button>
        </div>
        <div className={style.tags}>{tags}</div>
        <p className={style.article}>{description}</p>
      </div>
      <div className={style.avatar}>
        <div>
          <h3>{author.username}</h3>
          <p> {format(new Date(createdAt), 'd MMMM, Y')}</p>
        </div>

        <div className={style.avatarka}>
          <img alt='avatar' src={author.image} />
        </div>
      </div>
    </div>
  );
};

export default Card;
