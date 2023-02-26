import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import Card from '../Card';
import style from './ArticleList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/action-creators/fetchUsers';
import { checkToken } from '../../store/reducers/AuthSlice';

const ArticleList = () => {
  const users = useAppSelector((state) => state.userReducer.users);
  const countPage = useAppSelector((state) => state.userReducer.articleCount);

  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  //временный костыль по токену, пока не разберешься с axios!
  const authToken = localStorage.getItem('token');
  useEffect(() => {
    if (authToken) {
      dispatch(checkToken());
    }
    dispatch(fetchUsers(page));
  }, [page, authToken]);

  const onChange = (pageCount: number): void => {
    setPage(pageCount);
  };

  return (
    <>
      <div className={style.list}>
        {users.map((item: any) => {
          const { createdAt, author, tagList, title, favoritesCount, description, slug, body } = item;

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
              body={body}
            />
          );
        })}

        <Pagination current={page} total={countPage} pageSize={5} onChange={onChange} showSizeChanger={false} />
      </div>
    </>
  );
};

export default ArticleList;
