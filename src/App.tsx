import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/action-creators/fetchUsers';

function App() {
  const users = useAppSelector((state) => state.userReducer.users);
  const dispatch = useAppDispatch();
  console.log(users[0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className='app'>
      <Header />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
