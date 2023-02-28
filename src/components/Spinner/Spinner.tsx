import { Alert, Spin } from 'antd';

const Spinner = () => {
  return (
    <Spin tip='Loading...'>
      <Alert message='Alert message title' type='info' />
    </Spin>
  );
};

export default Spinner;
