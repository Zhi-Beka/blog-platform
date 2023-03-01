import { FC } from 'react';
import Post from '../../components/Post';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { postNewArticle } from '../../store/thunks/PostThunk';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

type ValuesType = {
  title: string;
  tagList: string[];
  description: string;
  text: string;
};

const NewPostPage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.postReducer);
  const navigate = useNavigate();
  const handleNewPost = async (values: ValuesType) => {
    const res = await dispatch(postNewArticle({ article: values }));
    if (res.type.endsWith('fulfilled')) {
      toast.success('New article successfully posted !');
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
    if (res.type.endsWith('rejected')) {
      toast.error(error?.errorMessage);
    }
  };
  if (loading) {
    return <Spinner />;
  }
  return <Post handleSubmit={handleNewPost} post={undefined} />;
};

export default NewPostPage;
