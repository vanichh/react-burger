import styles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

const classNameLink = 'text text_type_main-default text_color_inactive pl-2';

export const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className={styles.wrapper}>
        <nav className={styles.list}>
          <div className={`${styles.item} pl-5 pr-5 pt-4 pb-4`}>
            <BurgerIcon type='primary' />
            <NavLink
              to='/'
              exact={true}
              className={classNameLink}
              activeClassName='activ-link'
            >
              Сонструктор
            </NavLink>
          </div>
          <div className={`${styles.item} pl-5 pr-5 pt-4 pb-4 ml-2`}>
            <ListIcon type='primary' />
            <NavLink
              to='feed'
              className={classNameLink}
              activeClassName='activ-link'
            >
              Лента заказов
            </NavLink>
          </div>
        </nav>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <div className={`${styles.header__profile} pl-5 pr-5 pt-4 pb-4`}>
          <ProfileIcon type='primary' />
          <NavLink
            to='/profile'
            className={classNameLink}
            activeClassName='activ-link'
          >
            Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
};
