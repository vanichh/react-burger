import  { FC, } from 'React';
import styles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, Link } from 'react-router-dom';

const CLASS_NAME_LINK = 'text text_type_main-default text_color_inactive pl-2';

export const AppHeader: FC = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className={styles.wrapper}>
        <nav className={styles.list}>
          <div className={`${styles.item} pl-5 pr-5 pt-4 pb-4`}>
            <BurgerIcon type='primary' />
            <NavLink
              to='/'
              exact={true}
              className={CLASS_NAME_LINK}
              activeClassName='activ-link'
            >
              Kонструктор
            </NavLink>
          </div>
          <div className={`${styles.item} pl-5 pr-5 pt-4 pb-4 ml-2`}>
            <ListIcon type='primary' />
            <NavLink
              to='/feed'
              className={CLASS_NAME_LINK}
              activeClassName='activ-link'
            >
              Лента заказов
            </NavLink>
          </div>
        </nav>
        <Link to='/' className={styles.header__logo}>
          <Logo />
        </Link>
        <div className={`${styles.header__profile} pl-5 pr-5 pt-4 pb-4`}>
          <ProfileIcon type='primary' />
          <NavLink
            to='/profile'
            className={CLASS_NAME_LINK}
            activeClassName='activ-link'
          >
            Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
};
