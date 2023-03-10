import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import style from './ProfileForm.module.scss';

interface IProps {
  onSubmit: (values: any) => void;
}

const ProfileForm: FC<IProps> = (props) => {
  const { onSubmit } = props;

  return (
    <div className={style.form}>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onSubmit}>
        <h2>Edit Profile</h2>
        <span className={style.label}> Username</span>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              pattern: /^(?=.{3,})[a-z][a-z0-9]*$/,
              message: 'Use lowercase English letters and numbers.',
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

        <span className={style.label}> New password</span>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Your password needs to be at least 6 characters.', min: 6 }]}
          style={{ marginBottom: '12' }}
        >
          <Input type='password' placeholder='Password' style={{ height: '40px' }} maxLength={40} />
        </Form.Item>

        <span className={style.label}> Avatar image(url)</span>
        <Form.Item
          style={{ marginBottom: '21' }}
          name='image'
          rules={[{ required: true }, { type: 'url' }, { type: 'string', min: 6 }]}
        >
          <Input placeholder='Avatar image' style={{ height: '40px' }} />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            style={{ width: '100%', height: '40px', background: ' #1890FF' }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
