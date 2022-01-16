import { ProfileEditing } from 'components/profile-editing/profile-editing';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'services/actions/user';
import styles from './page.module.css';

const classNameLink = `text text_type_main-medium ${styles.link} text_color_inactive`;

export const ProfilePage = () => {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.aligin_text} mt-30`}>
      <div className={`${styles.menu_link} mr-10`}>
        <NavLink
          exact={true}
          className={classNameLink}
          activeClassName={styles.activ_link}
          to='/profile'>
          Профиль
        </NavLink>
        <NavLink
          exact={true}
          className={classNameLink}
          activeClassName={styles.activ_link}
          to='/profile/orders'>
          История заказов
        </NavLink>
        <NavLink
          exact={true}
          className={classNameLink}
          activeClassName={styles.activ_link}
          onClick={() => dispatch(logoutUser())}
          to='/login'>
          Выход
        </NavLink>
        <p className='text text_type_main-default text_color_inactive mt-20'>
          В этом разделе вы сможите изменить персольнальные данные
        </p>
      </div>
      <ProfileEditing />
    </div>
  );
};
