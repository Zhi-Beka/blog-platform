import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { RootRoute } from './routes/RootRoute';
import { getCurrentUser } from './store/thunks/authUsers';

function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token]);

  return <RootRoute />;
}

export default App;
