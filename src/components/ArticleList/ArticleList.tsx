import { Pagination } from 'antd';
import Card from '../Card';
import style from './ArticleList.module.scss';

const ArticleList = () => {
  return (
    <div className={style.list}>
      <Card />
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default ArticleList;
