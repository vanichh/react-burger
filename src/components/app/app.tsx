/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPassword,
  ProfilePage,
  IngredientPage,
  NotFound404,
  FeedPage,
  OrderPage,
} from 'pages';
import { useDispatch } from 'services/types';
import { FC, useEffect } from 'react';
import { getUser } from 'services/actions/user';
import { ProtectedRoute } from '../protected-route';
import { getIngredients } from 'services/actions/ingredients';
import { AppHeader } from '../app-header';
import { ModalIngredients, ModalOrder } from 'components/modals';

const ModalSwitch: FC = () => {
  const dispatch = useDispatch();
  const location: { [index: string]: any } = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    // запрашиваем пользователя и ингриденты
    dispatch(getIngredients());
    dispatch(getUser());
  }, []);

  return (
    <>
      <Switch location={background || location}>
        <Route path='/' exact component={HomePage} />
        <Route path='/feed' exact component={FeedPage} />
        <Route path='/ingredients/:id' exact component={IngredientPage} />
        <ProtectedRoute path='/profile/orders/:id' children={<OrderPage />} />
        <ProtectedRoute path='/profile' children={<ProfilePage />} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/forgot-password' exact component={ForgotPasswordPage} />
        <Route path='/reset-password' exact component={ResetPassword} />
        <Route path='/feed/:id' exact component={OrderPage} />
        <Route component={NotFound404} />
      </Switch>
      {background && (
        <>
          <Route path='/ingredients/:id' component={ModalIngredients} />
          <Route path='/feed/:id' component={ModalOrder} />
          <Route path='/profile/orders/:id' component={ModalOrder} />
        </>
      )}
    </>
  );
};

export const App: FC = () => {
  return (
    <Router>
      <AppHeader />
      <ModalSwitch />
    </Router>
  );
};
