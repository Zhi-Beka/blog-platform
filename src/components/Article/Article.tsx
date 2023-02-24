import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Article.module.scss';

import Card from '../Card';
import { IUser } from '../../types/userTypes';

const Article = () => {
  const { id } = useParams();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetch(`https://blog.kata.academy/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.article));
  }, [id]);

  return (
    <div className={style.list}>
      {user && (
        <Card
          createdAt={user.createdAt}
          author={user.author}
          tagList={user.tagList}
          title={user.title}
          favoritesCount={user.favoritesCount}
          description={user.description}
          body={user.body}
          slug={user.slug}
        />
      )}
    </div>
  );
};

export default Article;
