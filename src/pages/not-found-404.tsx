import styles from './page.module.css';
import { Link } from 'react-router-dom';
import { Wrapper } from 'components/wrapper';
const classNameLink = `${styles.link} text text_type_main-default activ-link mt-10`;

export const NotFound404 = () => {
  return (
    <Wrapper className={styles.flex_column}>
      <p className='text text_type_main-medium'>
        Запрашиваемая страница не найдена
      </p>
      <Link className={classNameLink} to='/'>
        На главную
      </Link>
    </Wrapper>
  );
};



