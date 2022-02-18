import { FC } from 'react';
import { useSelector } from 'services/types';
import styles from './info-all-orders.module.css';

export const InfoAllOrders: FC = () => {
  const { total, totalToday } = useSelector((store) => store.wsOrders);

  return (
    <section>
      <div className={styles.wrapper}>
        <div>
          <p className='text text_type_main-medium'>Готовы:</p>
        </div>
        <div>
          <p className='text text_type_main-medium'>В работе:</p>
        </div>
      </div>
      <p className='mt-6 text text_type_main-medium'>Выполненно за все время</p>
      <p className={`text text_type_digits-large ${styles.number}`}>
        {totalToday}
      </p>
      <p className='text text_type_main-medium mt-15'>Выполненно за сегодня</p>
      <p className={`text text_type_digits-large ${styles.number}`}>{total}</p>
    </section>
  );
};
