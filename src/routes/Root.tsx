import path from 'path';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Article from '../components/Article/Article';
import ArticleList from '../components/ArticleList';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import LoginForm from '../components/Form/LoginForm/LoginForm';
import ProfileForm from '../components/Form/ProfileForm/ProfileForm';
import RegisterForm from '../components/Form/RegisterForm/RegisterForm';

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
