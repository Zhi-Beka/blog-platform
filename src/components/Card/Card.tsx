import style from './Card.module.scss';
import like from '../../assets/heart.png';
import liked from '../../assets/liked.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Button, message, Popconfirm } from 'antd';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import { IUsers } from '../../types/user-types';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteArticleBySlug, deleteLikeBySlug, likePostBySlug } from '../../store/thunks/PostThunk';
import { useState } from 'react';

const Card = (props: IUsers) => {
  const { createdAt, author, tagList, title, favoritesCount, description, slug, body, favorited } = props;
  const [liked, setLiked] = useState(favorited);
  const [likes, setLikes] = useState(favoritesCount);
  const { user } = useAppSelector((state) => state.authReducer);
  const isOwnAuthor = author.username === user?.username;
  const location = useLocation();
  const navigate = useNavigate();
  const articleCard = location.pathname.includes(slug);
  const dispatch = useAppDispatch();

  const tags = tagList?.map((el: string, index: number) => <span key={index}>{el}</span>);
  const descriptionStyle = classNames({
    [style.article]: !articleCard,
    [style.articleFull]: articleCard,
  });

  const articleBody = articleCard && <ReactMarkdown>{body}</ReactMarkdown>;

  const deletePost = async () => {
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
  const isLogged = localStorage.getItem('isLogged');
  const disable = isLogged ? false : true;
  const handleLikeBtn = async () => {
    if (!liked) {
      const res = await dispatch(likePostBySlug(slug));
      setLiked(() => res.payload.article.favorited);
      setLikes(() => res.payload.article.favoritesCount);
      if (res.type.endsWith('fulfilled')) {
        toast.success('Successfully liked !');
      }
      if (res.type.endsWith('rejected')) {
        toast.error('You cant liked without loggin');
      }
    } else {
      const res = await dispatch(deleteLikeBySlug(slug));
      setLiked((liked) => !liked);
      setLikes((likes) => likes - 1);
      if (res.type.endsWith('fulfilled')) {
        toast.success('Successfully deleted like!');
      }
      if (res.type.endsWith('rejected')) {
        toast.error('You cant delete!');
      }
    }
  };

  const likeStyle = classNames({
    [style.like]: true,
    [style.liked]: liked,
  });

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
              <button className={likeStyle} onClick={handleLikeBtn} disabled={disable}>
                {likes}
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
