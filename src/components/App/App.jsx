import { Route, Switch, Redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header/Header';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

import s from './App.module.scss';

export default function App() {
  return (
    <div className={s.container}>
      <Header />
      <hr />
      <Switch>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/contacts'}>
          <ContactsPage />
        </Route>
        <Redirect to={'/login'} />
      </Switch>
      <Toaster />
    </div>
  );
}
