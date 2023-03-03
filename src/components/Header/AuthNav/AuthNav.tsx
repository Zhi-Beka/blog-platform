import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import style from './AuthNav.module.scss';
import avatar from '../../../assets/avatar.png';
import { logOut } from '../../../store/slices/AuthSlice';
import { toast } from 'react-toastify';

const AuthNav: FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutBtn = () => {
    dispatch(logOut());
    toast.success('You are logged out');
    navigate('/');
  };

  return (
    <>
      <Link to='new-article' className={style.active}>
        Create article
      </Link>

      <Link to='profile' className={style.profile}>
        {user?.username}
        <div className={style.image}>
          <img src={user ? user.image : avatar} />
        </div>
      </Link>

      <button className={style.logOut} onClick={logOutBtn}>
        Log Out
      </button>
    </>
  );
};

export default AuthNav;