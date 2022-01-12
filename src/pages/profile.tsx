import { NavLink } from 'react-router-dom';
import styles from './page.module.css';

const classNameLink = `text text_type_main-medium ${styles.link}`;

// text_color_inactive

const activLink = (isActive: boolean) => {
  return `${classNameLink} ${isActive ? '' : 'text_color_inactive'}`;
};

export const ProfilePage = () => {
  return (
    <>
      <NavLink className={activLink} to='/profile'>
        Профиль
      </NavLink>
      <NavLink className={activLink} to='/profile/orders'>
        История заказов
      </NavLink>
      <NavLink className={activLink} to='/login'>
        Выход
      </NavLink>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        В этом разделе вы сможите изменить персольнальные данные
      </p>
    </>
  );
};
