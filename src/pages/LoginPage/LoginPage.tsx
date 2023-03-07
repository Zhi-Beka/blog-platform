import LoginForm from '../../components/Form/LoginForm';
import { LoginType } from '../../types/auth-types';
import { loginUser } from '../../store/thunks/authUsers';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { isError, loading } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginType) => {
    const { email, password } = data;
    const userData = { user: { email, password } };
    const res = await dispatch(loginUser(userData));
    if (res.type.endsWith('fulfilled')) {
      toast.success('Successfully logined!');

      navigate('/');
    }
    if (res.type.endsWith('rejected')) {
      toast.error(isError?.errorMessage);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;
