import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Article, ArticleList, ErrorPage, LoginForm, ProfileForm, RegisterForm } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ArticleList />,
        index: true,
      },
      {
        path: 'articles',
        element: <ArticleList />,
      },
      {
        path: 'articles/:id',
        element: <Article />,
      },

      {
        path: 'login',
        element: <RegisterForm />,
      },
      {
        path: 'sign-in',
        element: <LoginForm />,
      },
      {
        path: 'edit-profile',
        element: <ProfileForm />,
      },
    ],
  },
]);
