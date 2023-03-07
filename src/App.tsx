import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { getCurrentUser } from './store/thunks/authUsers';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RequireAuth from './hoc/RequireAuth';
import AuthUser from './hoc/AuthUser';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import EditPostPage from './pages/EditPostPage/EditPostPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NewPostPage from './pages/NewPostPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ArticleListPage />} />
        <Route path='articles' element={<ArticleListPage />} />
        <Route path='articles/:id' element={<ArticlePage />} />
        <Route
          path='sign-in'
          element={
            <AuthUser>
              <LoginPage />
            </AuthUser>
          }
        />
        <Route
          path='sign-up'
          element={
            <AuthUser>
              <RegisterPage />
            </AuthUser>
          }
        />
        <Route
          path='profile'
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path='/new-article'
          element={
            <RequireAuth>
              <NewPostPage />
            </RequireAuth>
          }
        />
        <Route
          path='/articles/:id/edit'
          element={
            <RequireAuth>
              <EditPostPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
