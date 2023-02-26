import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import style from './LoginForm.module.scss';

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className={style.form}>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
        <h2 className={style.title}>Sign In</h2>

        <span className={style.label}> Email address</span>
        <Form.Item
          name='email'
          //initialValue={error && data[1]}
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
            disabled={status === 'loading'}
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
