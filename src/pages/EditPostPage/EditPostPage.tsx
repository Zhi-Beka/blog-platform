import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Post from '../../components/Post';
import { IUsers } from '../../types/user-types';
import { updateArticleBySlug } from '../../store/thunks/PostThunk';
import { toast } from 'react-toastify';

type ValuesType = {
  title: string;
  tagList: string[];
  description: string;
  text: string;
};

const EditPostPage: FC = () => {
  const [post, setPost] = useState<IUsers | null>(null);
  const { state: slug } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.postReducer);

  useEffect(() => {
    fetch(`https://blog.kata.academy/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data.article));
  }, [slug]);

  const handleEditPost = async (values: ValuesType) => {
    const res = await dispatch(updateArticleBySlug({ article: values, slug }));
    if (res.type.endsWith('fulfilled')) {
      toast.success('Article successfully updated !');
      navigate('/');
    }
    if (res.type.endsWith('rejected')) {
      toast.error(error?.errorMessage);
    }
  };

  return post && <Post handleSubmit={handleEditPost} post={post} />;
};

export default EditPostPage;
