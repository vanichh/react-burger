import { FC } from 'react';
import { useSelector } from 'services/types/';
import styles from './app.module.css';

export const ErrorRequest: FC = () => {
  const { errorRequestText } = useSelector((store) => store.igridients);
  return (
    <div className={styles.error}>
      <p className='text text_type_main-medium mt-10 mb-10'>
        Произошла ошибка космического маштаба
      </p>
      <p className='text text_type_main-default mt-5 mb-5'>
        Код этой плохой ошибки вы увидите ниже
      </p>
      <p className='text text_type_main-default mt-5 mb-5'>
        {errorRequestText.toString()}
      </p>
    </div>
  );
};
