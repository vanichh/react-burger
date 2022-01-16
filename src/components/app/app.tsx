import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppHeader } from 'components/app-header/app-header';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPassword,
  ProfilePage,
} from 'pages';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from 'services/actions/user';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <HomePage />
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginPage />
          </Route>
          <Route path='/register' exact={true}>
            <RegisterPage />
          </Route>
          <Route path='/forgot-password' exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path='/reset-password' exact={true}>
            <ResetPassword />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
