import styles from './app-header.module.css';
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = () => {
    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <div className={styles.wrapper}>
                <nav className={styles.list}>
                    <div className={`${styles.item} pl-5 pr-5 pt-4 pb-4`}>
                        <BurgerIcon type='primary' />
                        <p className='text text_type_main-default pl-2'>
                            Сонструктор
                        </p>
                    </div>
                    <div className={`${styles.item} pl-5 pr-5 pt-4 pb-4 ml-2`}>
                        <ListIcon type='primary' />
                        <p className='text text_type_main-default pl-2'>
                            Лента заказов
                        </p>
                    </div>
                </nav>
                <div className={styles.header__logo}>
                    <Logo />
                </div>
                <div
                    className={`${styles.header__profile} pl-5 pr-5 pt-4 pb-4`}>
                    <ProfileIcon type='primary' />
                    <p className='text text_type_main-default pl-2'>
                        Личный кабинет
                    </p>
                </div>
            </div>
        </header>
    );
};
export default AppHeader;
