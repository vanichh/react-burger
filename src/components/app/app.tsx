/* eslint-disable react-hooks/exhaustive-deps */
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
import { ProtectedRoute } from '../protected-route/protected-route';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <HomePage />
          </Route>
          <ProtectedRoute path='/profile'>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute path='/login' exact={true}>
            <LoginPage />
          </ProtectedRoute>
          <ProtectedRoute path='/register' exact={true}>
            <RegisterPage />
          </ProtectedRoute>
          <ProtectedRoute path='/forgot-password' exact={true}>
            <ForgotPasswordPage />
          </ProtectedRoute>
          <ProtectedRoute path='/reset-password' exact={true}>
            <ResetPassword />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
}
