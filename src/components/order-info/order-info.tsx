/* eslint-disable no-sequences */
import { FC } from 'react';
import { useSelector } from 'services/types';
import { useParams } from 'react-router-dom';
import { formatTime } from 'utils/format-time';
import styles from './order-info.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIngridients } from './list-ingridients';

const CLASS_NAME_TIME = `text text_type_main-small text_color_inactive`;
const CLASS_NAME_PRICE = `${styles.price} text text_type_digits-default mr-3`;
const CLASS_NAME_STATUS = `text text_type_main-default mt-3 ${styles['success-order']}`;
const CLASS_NAME_NUMBER = `text text_type_digits-default ${styles['number-order']}`;

let statusOrder = '';

export const OrdeInfo: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { name, number, status, createdAt, ingredients } = useSelector(
    store => store.wsOrders.ordersList
  ).find(({ _id }) => _id === id);

  switch (status) {
    case 'done': {
      statusOrder = 'Выполнен';
      break;
    }
    case 'pending': {
      statusOrder = 'Ожидает';
      break;
    }
    case 'created': {
      statusOrder = 'Создан';
      break;
    }
  }
  const { listIgridients } = useSelector(store => store.igridients);

  const price = ingredients.reduce(
    (sum, id) => (sum += listIgridients.find(({ _id }) => _id === id).price),
    0
  );

  const ingridientsOrder = Object.entries(
    ingredients.reduce(
      (acum: { [key: string]: number }, id) => (
        (acum[id] = (acum[id] || 0) + 1), acum
      ),
      {}
    )
  );

  const timeOrder = formatTime(createdAt);

  return (
    <div className={styles.container}>
      <header>
        <p className={CLASS_NAME_NUMBER}>#{number}</p>
        <h3 className='text text_type_main-medium mt-6'>{name}</h3>
        <p className={CLASS_NAME_STATUS}>{statusOrder}</p>
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
