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
  IngredientPage,
  NotFound404,
} from 'pages';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from 'services/actions/user';
import { ProtectedRoute } from '../protected-route/protected-route';
import { getIngredients } from 'services/actions/ingredients';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, []);

  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/ingredients/:id' exact={true}>
          <IngredientPage />
        </Route>
        <ProtectedRoute path='/profile'>
          <ProfilePage />
        </ProtectedRoute>
        <Route path='/login'>
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
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </Router>
  );
}
