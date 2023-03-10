import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ArticlePage.module.scss';
import Card from '../../components/Card';
import { IUsers } from '../../types/user-types';

const ArticlePage: FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUsers | null>(null);

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
          favorited={user.favorited}
        />
      )}
    </div>
  );
};

export default ArticlePage;
