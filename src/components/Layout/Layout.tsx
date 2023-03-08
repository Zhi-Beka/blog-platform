import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <>
        <Outlet />
      </>
      <ToastContainer />
    </div>
  );
};

export default Layout;
