import { Route, Switch, Redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoggedIn } from 'redux/selectors';
import { getCurrentUser } from 'redux/thunks/authThunks';
import Header from 'components/Header/Header';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

import s from './App.module.scss';

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser(token));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className={s.container}>
      <Header />
      <hr />
      {isLoggedIn ? (
        <Switch>
          <Route path={'/contacts'}>
            <ContactsPage />
          </Route>
          <Redirect to={'/contacts'} />
        </Switch>
      ) : (
        <div className={s.authContainer}>
          <Switch>
            <Route path={'/login'}>
              <LoginPage />
            </Route>
            <Route path={'/register'}>
              <RegisterPage />
            </Route>
            <Redirect to={'/login'} />
          </Switch>
        </div>
      )}

      <Toaster />
    </div>
  );
}
