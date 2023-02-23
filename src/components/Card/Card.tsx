import style from './Card.module.scss';
import like from '../../assets/heart.png';
import avatar from '../../assets/avatar.png';

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.card__content}>
        <div className={style.header}>
          <h2 className={style.header__title}>Some article title</h2>
          <button className={style.header__like}>
            <img src={like} />
            12
          </button>
        </div>
        <div className={style.tags}>
          <p>Tag1 </p>
          <p>Tag1 cgnhgk, </p>
        </div>
        <p className={style.article}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt asperiores nostrum accusantium eum
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate praesentium error iure quasi labore et
          nisi ullam maiores, iusto nihil odit nobis eius ipsa itaque dolorum hic earum laborum.
        </p>
      </div>
      <div className={style.avatar}>
        <div>
          <h3>John Doe</h3>
          <p>March 5, 2020</p>
        </div>

        <div className={style.img}>
          <img alt='avatar' src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default Card;
