import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Article, ArticleList, ErrorPage, LoginForm, ProfileForm, RegisterForm, NewArticlePost } from '../components';

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
        path: 'sign-up',
        element: <RegisterForm />,
      },
      {
        path: 'sign-in',
        element: <LoginForm />,
      },
      {
        path: 'profile',
        element: <ProfileForm />,
      },
      {
        path: 'new-article',
        element: <NewArticlePost />,
      },
    ],
  },
]);
