import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signUpUser } from '../../store/thunks/authUsers';
import { IData } from '../../types/auth-types';

const RegisterPage = () => {
  const { isError, user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSignUp = (data: IData) => {
    const { username, email, password } = data;
    const userData = { user: { username, email, password } };
    dispatch(signUpUser(userData));
    //maybe this would not work
    if (isError) toast.error(isError.errorMessage);
    if (user?.token) {
      toast.success('You are successfully registered');
      navigate('/');
    }
  };

  return <RegisterForm onSubmit={onSignUp} />;
};

export default RegisterPage;
