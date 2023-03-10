import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import RequireAuth from '../hoc/RequireAuth';
import AuthUser from '../hoc/AuthUser';
import ArticleListPage from '../pages/ArticleListPage';
import ArticlePage from '../pages/ArticlePage';
import EditPostPage from '../pages/EditPostPage/EditPostPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NewPostPage from '../pages/NewPostPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import { article, articleId, edit, newArticle, profile, signIn, signUp } from './route-const';

export const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ArticleListPage />} />
        <Route path={article} element={<ArticleListPage />} />
        <Route path={articleId} element={<ArticlePage />} />
        <Route
          path={signIn}
          element={
            <AuthUser>
              <LoginPage />
            </AuthUser>
          }
        />
        <Route
          path={signUp}
          element={
            <AuthUser>
              <RegisterPage />
            </AuthUser>
          }
        />
        <Route
          path={profile}
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path={newArticle}
          element={
            <RequireAuth>
              <NewPostPage />
            </RequireAuth>
          }
        />
        <Route
          path={edit}
          element={
            <RequireAuth>
              <EditPostPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};
