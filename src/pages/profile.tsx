import { ProfileEditing } from 'components/profile-editing';
import { useDispatch } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { logoutUser } from 'services/actions/user';
import styles from './page.module.css';
import { Wrapper } from 'components/wrapper';

const classNameLink = `text text_type_main-medium ${styles.link} text_color_inactive`;

export const ProfilePage = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className={`${styles.menu_link} mr-10`}>
        <NavLink
          exact={true}
          className={classNameLink}
          activeClassName='activ-link'
          to='/profile'
        >
          Профиль
        </NavLink>
        <NavLink
          exact={true}
          className={classNameLink}
          activeClassName='activ-link'
          to='/profile/orders'
        >
          История заказов
        </NavLink>
        <NavLink
          exact={true}
          className={classNameLink}
          activeClassName='activ-link'
          onClick={() => dispatch(logoutUser())}
          to='/login'
        >
          Выход
        </NavLink>
        <p className='text text_type_main-default text_color_inactive mt-20'>
          В этом разделе вы сможите изменить персольнальные данные
        </p>
      </div>
      <Switch>
        <Route path='/profile' exact component={ProfileEditing} />
      </Switch>
    </Wrapper>
  );
};
