import { useEffect } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import style from './ErrorPage.module.scss';

export default function ErrorPage() {
  const error: any = useRouteError();
  const { statusText, message } = error;
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/articles');
    }, 2000);
  }, []);
  return (
    <div id='error-page' className={style.errorBox}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}
