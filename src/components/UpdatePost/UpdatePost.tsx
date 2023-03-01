import { useParams } from 'react-router-dom';
import style from 'Update.module.scss';

const UpdatePost = () => {
  const { id } = useParams();
  console.log(id);
  return <div>UpdatePost</div>;
};

export default UpdatePost;
