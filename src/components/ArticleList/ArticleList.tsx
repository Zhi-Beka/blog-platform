import { Pagination } from 'antd';
import { useEffect } from 'react';
import Card from '../Card';
import style from './ArticleList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creators/fetchUsers';
import { Outlet } from 'react-router';

const ArticleList = () => {
  const users = useAppSelector((state) => state.userReducer.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className={style.list}>
        {users.slice(0, 5).map((item: any) => {
          const { createdAt, author, tagList, title, favoritesCount, description, slug } = item;

          return (
            <Card
              key={slug}
              createdAt={createdAt}
              author={author}
              tagList={tagList}
              title={title}
              favoritesCount={favoritesCount}
              description={description}
              slug={slug}
            />
          );
        })}

        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default ArticleList;
