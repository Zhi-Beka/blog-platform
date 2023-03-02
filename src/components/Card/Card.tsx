import style from './Card.module.scss';
import like from '../../assets/heart.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Button, message, Popconfirm } from 'antd';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import { IUser } from '../../types/user-types';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteArticleBySlug } from '../../store/thunks/PostThunk';

const Card = (props: IUser) => {
  const { createdAt, author, tagList, title, favoritesCount, description, slug, body } = props;

  const { user } = useAppSelector((state) => state.authReducer);
  const isOwnAuthor = author.username === user?.username;

  const location = useLocation();
  const navigate = useNavigate();
  const articleCard = location.pathname.includes(slug);
  const dispatch = useAppDispatch();
  const tags = tagList?.filter((item) => item).map((el: string, index: number) => <span key={index}>{el}</span>);

  const descriptionStyle = classNames({
    [style.article]: !articleCard,
    [style.articleFull]: articleCard,
  });

  const articleBody = articleCard && <ReactMarkdown>{body}</ReactMarkdown>;

  const deletePost = async () => {
    console.log('click delete');
    const res = await dispatch(deleteArticleBySlug(slug));
    message.success('Your post deleted!');
    if (res.type.endsWith('fulfilled')) {
      toast.success('Post deleted!');
      navigate('/');
    }
    if (res.type.endsWith('rejected')) {
      toast.error('Error');
    }
  };

  const editBtn = articleCard && isOwnAuthor && (
    <div className={style.editBtn}>
      <Popconfirm
        title='Delete the task'
        description='Are you sure to delete this task?'
        onConfirm={deletePost}
        okText='Yes'
        cancelText='No'
        placement={'right'}
      >
        <button> Delete</button>
      </Popconfirm>

      <button onClick={() => navigate(`/articles/${slug}/edit`, { state: slug })}>edit</button>
    </div>
  );

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.header}>
          <div className={style.header__text}>
            <div className={style.top}>
              <>
                <Link to={articleCard ? '/articles' : `/articles/${slug}`}>
                  <h2>{title}</h2>
                </Link>
              </>
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
        <div className={style.content}>{articleBody}</div>
      </div>
    </div>
  );
};

export default Card;
