import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = () => {
    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.list}>
                <div className={`${styles.item} p-5`}>
                    <BurgerIcon type='primary' />
                    <p className='text text_type_main-default pl-2'>Сонструктор</p>
                </div>
                <div className={`${styles.item} p-5 ml-2`}>
                    <ListIcon type='primary' />
                    <p className='text text_type_main-default pl-2'>Лента заказов</p>
                </div>
            </nav>
            <div className={styles.header__logo}>
                <Logo />
            </div>
            <div className={`${styles.header__profile} p5`}>
                <ProfileIcon type='primary' />
                <p className='text text_type_main-default pl-2'>Личный кабинет</p>
            </div>
        </header>
    );
};
export default AppHeader;
