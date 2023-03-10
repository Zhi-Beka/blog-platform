import { Button, Form, Input, Space } from 'antd';
import style from './Post.module.scss';
import { FC } from 'react';

interface IProps {
  handleSubmit?: (values: any) => void;
  post?: any;
}

const Post: FC<IProps> = (props) => {
  const { handleSubmit, post } = props;

  return (
    <div className={style.logform__wrapper}>
      <Form onFinish={handleSubmit}>
        <h2 className={style.title}>{post ? 'Edit article' : 'Create new article'}</h2>

        <span className={style.label}>Title</span>
        <Form.Item
          name='title'
          rules={[{ required: true, message: 'Please input title' }]}
          style={{ marginBottom: '20px ' }}
          initialValue={post?.title}
        >
          <Input maxLength={100} placeholder='Title' style={{ height: '40px' }} />
        </Form.Item>

        <span className={style.label}>Short description</span>
        <Form.Item
          name='description'
          initialValue={post?.description}
          rules={[{ required: true, message: 'Please input short description' }]}
          style={{ marginBottom: '20px' }}
        >
          <Input maxLength={100} placeholder='Short description' style={{ height: '40px' }} />
        </Form.Item>

        <span className={style.label}>Text</span>
        <Form.Item
          name='body'
          initialValue={post?.body}
          rules={[{ required: true, message: 'Please input your article' }]}
          style={{ marginBottom: '20px' }}
        >
          <Input.TextArea maxLength={1000} placeholder='Text' style={{ height: '168px' }} />
        </Form.Item>

        <span className={style.label}>Tags</span>

        <Form.List name='tagList'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ width: 445 }} align='baseline'>
                  <Form.Item
                    {...restField}
                    name={name}
                    rules={[{ required: true, message: 'Missing tag. Please write it or delete the field' }]}
                  >
                    <Input placeholder='Tag' style={{ height: '40px', width: '300px' }} maxLength={30} />
                  </Form.Item>

                  <Button
                    danger
                    onClick={() => remove(name)}
                    style={{ height: '40px', width: '120px', marginLeft: '5px' }}
                  >
                    Delete
                  </Button>
                </Space>
              ))}

              <Button
                onClick={() => add()}
                style={{
                  width: '120px',
                  height: '40px',
                  border: '1px solid #1890FF',
                  color: '#1890FF',
                }}
              >
                Add tag
              </Button>
            </>
          )}
        </Form.List>

        <Button
          type='primary'
          htmlType='submit'
          className='login-form-button'
          style={{ width: 320, height: '40px', background: ' #1890FF', marginTop: '20px', display: 'block' }}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Post;
