import React from 'react';
import style from './List.module.scss';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <div className={style.list}>{props.items.map(props.renderItem)}</div>;
}

export default List;
