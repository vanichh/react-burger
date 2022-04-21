/* eslint-disable no-sequences */
import { FC, useMemo } from 'react';
import { useSelector } from 'services/types';
import { useParams } from 'react-router-dom';
import { formatTime } from 'utils/format-time';
import styles from './order-info.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIngridients } from './list-ingridients';
import { statusOrder } from './status-order';

const CLASS_NAME_TIME = `text text_type_main-small text_color_inactive`;
const CLASS_NAME_PRICE = `${styles.price} text text_type_digits-default mr-3`;
const CLASS_NAME_STATUS = `text text_type_main-default mt-3 ${styles['success-order']}`;
const CLASS_NAME_NUMBER = `text text_type_digits-default ${styles['number-order']}`;

export const OrdeInfo: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { name, number, status, createdAt, ingredients } = useSelector(
    (store) => store.wsOrders.ordersList.find(({ _id }) => _id === id)
  );

  const { listIgridients } = useSelector((store) => store.igridients);

  const price = ingredients.reduce(
    (sum, id) => (sum += listIgridients.find(({ _id }) => _id === id).price),
    0
  );

  const ingridientsOrder = Object.entries(
    ingredients.reduce<Record<string, number>>(
      (acum, id) => ((acum[id] = (acum[id] || 0) + 1), acum),
      {}
    )
  );

  const timeOrder = useMemo(() => formatTime(createdAt), [createdAt]);

  return (
    <div className={styles.container}>
      <header>
        <p className={CLASS_NAME_NUMBER}>#{number}</p>
        <h3 className='text text_type_main-medium mt-6'>{name}</h3>
        <p className={CLASS_NAME_STATUS}>{statusOrder(status)}</p>
      </header>
      <p className='text text_type_main-medium mt-15'>Состав:</p>
      <div>
        <ListIngridients
          ingridientsOrder={ingridientsOrder}
          listIgridients={listIgridients}
        />
      </div>
      <footer className={styles.footer}>
        <p className={CLASS_NAME_TIME}>{timeOrder}</p>
        <p className={CLASS_NAME_PRICE}>{price}</p>
        <CurrencyIcon type='primary' />
      </footer>
    </div>
  );
};
