/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
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
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import Modal from 'components/modal/modal';

const ModalSwitch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location: { [index: string]: any } = useLocation();
  const background: any = location.state && location.state.background;

  const closeModalWindows = (e: Event) => {
    e.stopPropagation();
    history.goBack();
  };

  const ModalWidnows = () => {
    return (
      <Modal title='Детали ингредиента' closeModalWindows={closeModalWindows}>
        <IngredientDetails />
      </Modal>
    );
  };

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, []);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path='/' exact component={HomePage} />
        <Route path='/ingredients/:id' exact component={IngredientPage} />
        <ProtectedRoute path='/profile'>
          <ProfilePage />
        </ProtectedRoute>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/forgot-password' exact component={ForgotPasswordPage} />
        <Route path='/reset-password' exact component={ResetPassword} />
        <Route component={NotFound404} />
      </Switch>

      {background && <Route path='/ingredients/:id' component={ModalWidnows} />}
    </>
  );
};

export const App = () => {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
};
