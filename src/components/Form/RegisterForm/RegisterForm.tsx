/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import style from './RegisterForm.module.scss';
import { FC } from 'react';

interface IProps {
  onSubmit: (values: any) => void;
}

const RegisterForm: FC<IProps> = (props) => {
  const { onSubmit } = props;

  return (
    <div className={style.form}>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onSubmit}>
        <h2>Create new account</h2>
        <span className={style.label}> Username</span>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              pattern: /^(?=.{3,20})[a-z][a-z0-9]*$/,
              message: 'Please type with lowercase letters',
            },
          ]}
          style={{ marginBottom: '12', height: '40px' }}
        >
          <Input placeholder='Username' style={{ height: '40' }} maxLength={20} />
        </Form.Item>

        <span className={style.label}> Email address</span>
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please input correct email!', type: 'email' }]}
          style={{ marginBottom: '12', height: '40px' }}
        >
          <Input type='email' placeholder='Email address' style={{ height: '40px' }} maxLength={40} />
        </Form.Item>

        <span className={style.label}> Password</span>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Your password needs to be at least 6 characters.', min: 6 }]}
          style={{ marginBottom: '12' }}
        >
          <Input type='password' placeholder='Password' style={{ height: '40px' }} maxLength={40} />
        </Form.Item>

        <span className={style.label}> Repeat Password</span>
        <Form.Item
          name='confirm'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Passwords must match',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords must match!'));
              },
            }),
          ]}
        >
          <Input.Password visibilityToggle={false} placeholder={'Password'} style={{ height: '40px' }} />
        </Form.Item>

        <Form.Item style={{ marginBottom: '-3' }}>
          <Form.Item
            name='remember'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Should accept it'))),
              },
            ]}
          >
            <Checkbox style={{ color: '#595959 ' }}>I agree to the processing of my personal information</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            style={{ width: '100%', height: '40px', background: ' #1890FF' }}
          >
            Create
          </Button>
        </Form.Item>
        <p>
          Already have an account?{' '}
          <Link to={'/sign-in'} className={style.signin}>
            Sign In.
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterForm;
