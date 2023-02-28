import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import style from './LoginForm.module.scss';
import { LoginType } from '../../../types/userTypes';
import { loginUser } from '../../../store/thunks/AuthThunk/authUsers';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

const LoginForm = () => {
  const { isError, loading } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginType) => {
    const { email, password } = data;
    const userData = { user: { email, password } };
    const res = await dispatch(loginUser(userData));
    if (res.type.endsWith('fulfilled')) {
      toast.success('Successfully logined!');
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
    if (res.type.endsWith('rejected')) {
      toast.error(isError?.errorMessage);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={style.form}>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={handleLogin}>
        <h2 className={style.title}>Sign In</h2>

        <span className={style.label}> Email address</span>
        <Form.Item
          name='email'
          initialValue={isError}
          rules={[{ required: true, message: 'Please input correct email!', type: 'email' }]}
          style={{ marginBottom: '12', height: '40px' }}
        >
          <Input type='email' placeholder='Email address' style={{ height: '40px' }} maxLength={40} />
        </Form.Item>

        <span className={style.label}> Password</span>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Your password needs to be at least 6 characters.', min: 6 }]}
          style={{ marginBottom: '12px' }}
        >
          <Input type='password' placeholder='Password' style={{ height: '40px' }} maxLength={40} />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            disabled={loading}
            htmlType='submit'
            className='login-form-button'
            style={{ width: '100%', height: '40px', background: ' #1890FF', marginTop: '20px' }}
          >
            Login
          </Button>
        </Form.Item>
        <p>
          Do not have an account?{' '}
          <Link to={'/sign-up'} className={style.signup}>
            Sign Up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
