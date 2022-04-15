import { ModalIngredients, ModalOrder } from 'components/modals';
import { ProtectedRoute } from './protected-route';
import {
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

import { FC } from 'react';

import { ILocationState } from 'utils/types';

export const ModalSwitch: FC = () => {
  const location: ILocationState = useLocation();
  const background = location.state && location.state.background;
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
