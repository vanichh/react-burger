import { FC } from 'react';
import { useSelector } from 'services/types';
import { useParams } from 'react-router-dom';
import { formatTime } from 'utils/format-time';
import { IDataProps } from 'utils/types';
import styles from './order-info.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const CLASS_NAME_TIME = `text text_type_main-small text_color_inactive`;
const CLASS_NAME_PRICE = `${styles.price} text text_type_digits-default mr-3`;

let statusOrder = '';
export const OrdeInfo: FC = () => {
  const { id }: { id: string } = useParams();
  const { name, number, status, createdAt, ingredients } = useSelector(
    store => store.wsOrders.ordersList
  ).find(({ _id }) => _id === id);

  switch (status) {
    case 'done': {
      statusOrder = 'Выполнен';
    }
  }
  const { listIgridients }: { listIgridients: IDataProps[] } = useSelector(
    store => store.igridients
  );

  const price = ingredients.reduce(
    (sum: number, id: string) =>
      (sum += listIgridients.find(({ _id }) => _id === id).price),
    0
  );

  const data = formatTime(createdAt);

  return (
    <>
      <header>
        <h3 className='text text_type_main-medium mt-6'>{name}</h3>
      </header>
      <p className='text text_type_main-default mt-3'>{statusOrder}</p>
      <p className='text text_type_main-medium mt-15'>Состав:</p>
      <footer className={styles.footer}>
        <p className={CLASS_NAME_TIME}>{data}</p>
        <p className={CLASS_NAME_PRICE}>{price}</p>
        <CurrencyIcon type='primary' />
      </footer>
    </>
  );
};
