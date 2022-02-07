/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
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
} from 'pages';
import { useDispatch } from 'react-redux';
import { FC, useEffect, useMemo } from 'react';
import { getUser } from 'services/actions/user';
import { ProtectedRoute } from '../protected-route';
import { getIngredients } from 'services/actions/ingredients';
import { IngredientDetails } from '../ingredient-details';
import { AppHeader } from '../app-header';
import { Modal } from '../modal';

const ModalSwitch: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location: { [index: string]: any } = useLocation();
  const background: any = location.state && location.state.background;

  const closeModalWindows = () => history.goBack();

  const ModalWidnows: JSX.Element = useMemo(
    () => (
      <Modal title='Детали ингредиента' closeModalWindows={closeModalWindows}>
        <IngredientDetails />
      </Modal>
    ),
    [IngredientDetails]
  );

  useEffect(() => {
    // запрашиваем пользователя и ингриденты
    dispatch(getIngredients());
    dispatch(getUser());
  }, []);

  return (
    <>
      <Switch location={background || location}>
        <Route path='/' exact component={HomePage} />
        <Route path='/ingredients/:id' exact component={IngredientPage} />
        <ProtectedRoute path='/profile' children={<ProfilePage />} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/forgot-password' exact component={ForgotPasswordPage} />
        <Route path='/reset-password' exact component={ResetPassword} />
        <Route component={NotFound404} />
      </Switch>
      {background && <Route path='/ingredients/:id' children={ModalWidnows} />}
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
