import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginForm from '../components/Form/LoginForm/LoginForm';
import ProfileForm from '../components/Form/ProfileForm/ProfileForm';
import RegisterForm from '../components/Form/RegisterForm/RegisterForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <RegisterForm />,
  },
  {
    path: '/sign-in',
    element: <LoginForm />,
  },
  {
    path: '/edit-profile',
    element: <ProfileForm />,
  },
]);
