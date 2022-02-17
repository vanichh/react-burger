import { FC } from 'react';
import { useSelector } from 'services/types';
import styles from './info-all-orders.module.css';

export const InfoAllOrders: FC = () => {
  const { total, totalToday } = useSelector((store) => store.wsOrders);

  return (
    <section>
      <div className={styles.wrapper}>
        <div>
          <p>Готовы</p>
        </div>
        <div>
          <p>В работе</p>
        </div>
      </div>
      <p className='mt-6'>Выполненно за все время</p>
      <h3>{totalToday}</h3>
      <p>Выполненно за сегодня</p>
      <h3>{total}</h3>
    </section>
  );
};
