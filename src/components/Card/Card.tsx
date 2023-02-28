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

  const tags = tagList?.filter((item) => item).map((el: string, index: number) => <span key={index}>{el}</span>);

  const descriptionStyle = classNames({
    [style.article]: !articleCard,
    [style.articleFull]: articleCard,
  });

  const articleBody = articleCard && (
    <div className={style.body}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );

  const editBtn = articleCard && (
    <div className={style.editBox}>
      <button>delete</button>
      <button>edit</button>
    </div>
  );

  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.header__text}>
          <div className={style.top}>
            <Link to={articleCard ? '/articles' : `/articles/${slug}`}>
              <h2>{title}</h2>
            </Link>

            <button className={style.like}>
              <img src={like} />
              {favoritesCount}
            </button>
          </div>
          <div className={style.tags}> {tags}</div>
        </div>

        <div className={style.header__avatar}>
          <div>
            <h3>{author.username}</h3>
            <p> {format(new Date(createdAt), 'd MMMM, Y')}</p>
          </div>

          <div className={style.avatarka}>
            <img alt='avatar' src={author.image} />
          </div>
        </div>
      </div>
      <span className={descriptionStyle}>
        {description}

        {editBtn}
      </span>
      <p className={style.content}>{articleBody}</p>
    </div>
  );
};

export default Card;
