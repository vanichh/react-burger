import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu-profile.module.css';
import { useDispatch } from 'services/types';
import { logoutUser } from 'services/actions/user';
const CLASS_NAME_LINK = `text text_type_main-medium ${styles.link} text_color_inactive`;

export const MenuProfile: FC = () => {
  const dispatch = useDispatch();

  return (
    <nav className={`${styles.menu_link} mr-10`}>
      <NavLink
        exact={true}
        className={CLASS_NAME_LINK}
        activeStyle={{ color: 'white' }}
        to='/profile'
      >
        Профиль
      </NavLink>
      <NavLink
        exact={true}
        className={CLASS_NAME_LINK}
        activeStyle={{ color: 'white' }}
        to='/profile/orders'
      >
        История заказов
      </NavLink>
      <NavLink
        exact={true}
        className={CLASS_NAME_LINK}
        activeStyle={{ color: 'white' }}
        onClick={() => dispatch(logoutUser())}
        to='/login'
      >
        Выход
      </NavLink>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        В этом разделе вы сможете изменить персональные данные
      </p>
    </nav>
  );
};
