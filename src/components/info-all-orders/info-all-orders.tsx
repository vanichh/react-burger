import { FC } from 'react';
import { useSelector } from 'services/types';
import styles from './info-all-orders.module.css';

export const InfoAllOrders: FC = () => {
  const { total, totalToday, readyOrders } = useSelector(
    store => store.wsOrders
  );

  return (
    <section className={`ml-15 ${styles.conteiner}`}>
      <div className={styles.wrapper}>
        <div className='mr-6'>
          <p className='text text_type_main-medium mb-6'>Готовы:</p>
          <ul className={styles.wrapperStatus}>
            {readyOrders.map(number => (
              <li
                className={`${styles.textDone} text text_type_digits-default`}
                key={number}>
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className='text text_type_main-medium mb-6'>В работе:</p>
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
