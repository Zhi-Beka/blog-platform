import style from './Card.module.scss';
import like from '../../assets/heart.png';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { IUser } from '../../types/userTypes';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

const Card = (props: IUser) => {
  const { createdAt, author, tagList, title, favoritesCount, description, slug, body } = props;
  const location = useLocation();
  const articleCard = location.pathname.includes(slug);

  const tags = tagList?.map((el: string, index: number) => <p key={index}>{el}</p>);

  const descriptionStyle = classNames({
    [style.article]: !articleCard,
    [style.articleFull]: articleCard,
  });

  const articleBody = articleCard && (
    <div className={style.body}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );

  return (
    <div className={style.card}>
      <div className={style.card__content}>
        <div className={style.header}>
          <Link to={articleCard ? '/articles' : `/articles/${slug}`}>
            <h2 className={style.header__title}>{title}</h2>
          </Link>

          <button className={style.header__like}>
            <img src={like} />
            {favoritesCount}
          </button>
        </div>
        <div className={style.tags}>{tags}</div>
        <p className={descriptionStyle}>{description}</p>
        {articleBody}
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
