/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { getCurrentUser } from './store/thunks/authUsers';
import RootRouter from './routes/RootRouter';

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
      <RootRouter />
      <ToastContainer />
    </>
  );
}

export default App;
