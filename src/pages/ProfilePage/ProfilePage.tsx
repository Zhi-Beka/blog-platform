import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProfileForm from '../../components/Form/ProfileForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateProfile } from '../../store/thunks/authUsers';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.authReducer.user?.token);
  const { loading } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const res = await dispatch(updateProfile({ user: { ...values, token } }));
    if (res.type.endsWith('fulfilled')) {
      toast.success('Profile successfully udpated!');

      navigate('/');
    }
  };
  return <ProfileForm onSubmit={onFinish} />;
};

export default ProfilePage;
