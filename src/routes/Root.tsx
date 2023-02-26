import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Article, ArticleList, ErrorPage, LoginForm, ProfileForm, RegisterForm } from '../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    ],
  },
]);
