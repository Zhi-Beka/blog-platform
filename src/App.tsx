import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getCurrentUser } from './store/thunks/AuthThunk/authUsers';
import Spinner from './components/Spinner/Spinner';

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.userReducer.loading);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='app'>
        <Header />
        <>
          <Outlet />
        </>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
