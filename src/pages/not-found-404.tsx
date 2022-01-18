import styles from './page.module.css';
import { Link } from 'react-router-dom';

const classNameLink = `${styles.link} text text_type_main-default activ-link mt-10`;

export const NotFound404 = () => {
  return (
    <div className={`${styles.aligin_wrapper} mt-30`}>
      <p className='text text_type_main-medium'>
        Запрашиваемая страница не найдена
      </p>
      <Link className={classNameLink} to='/'>
        На главную
      </Link>
    </div>
  );
};
