import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm';
import Spinner from '../../components/Spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signUpUser } from '../../store/thunks/authUsers';
import { RegisterType } from '../../types/auth-types';

const RegisterPage = () => {
  const { loading } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSignUp = async (data: RegisterType) => {
    const { username, email, password } = data;
    const userData = { user: { username, email, password } };
    const res = await dispatch(signUpUser(userData));
    if (res.type.endsWith('fulfilled')) {
      toast.success('Successfully logined!');
      navigate('/');
    }
    if (res.type.endsWith('rejected')) {
      toast.error('User name is already taken, please choose another one');
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return <RegisterForm onSubmit={onSignUp} />;
};

export default RegisterPage;
