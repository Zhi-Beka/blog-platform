import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { useAppDispatch } from '../../hooks/redux';
import Post from '../../components/Post';
import { IUser } from '../../types/user-types';

const EditPostPage: FC = () => {
  const [post, setPost] = useState<IUser | null>(null);
  const { id: slug } = useParams();
  // const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`https://blog.kata.academy/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data.article));
  }, [slug]);

  const handleEditPost = (values: any) => {
    console.log(values);
  };
  return <>{post ? <Post handleSubmit={handleEditPost} post={post} /> : 'Please wait A MINUTE'}</>;
};

export default EditPostPage;
