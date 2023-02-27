import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { getCurrentUser } from './store/thunks/AuthThunk/authUsers';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

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
