/* eslint-disable no-sequences */
import { FC } from 'react';
import { useSelector } from 'services/types';
import { useParams } from 'react-router-dom';
import { formatTime } from 'utils/format-time';
import { IDataProps } from 'utils/types';
import styles from './order-info.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIngridients } from './list-ingridients';

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

  const ingridientsOrder: [string, number][] = Object.entries(
    ingredients.reduce(
      (acum: { [key: string]: number }, id: string) => (
        (acum[id] = (acum[id] || 0) + 1), acum
      ),
      {}
    )
  );

  const timeOrder = formatTime(createdAt);

  return (
    <div className={styles.container}>
      <p className={`text text_type_digits-default ${styles['number-order']}`}>
        #{number}
      </p>
      <header>
        <h3 className={`text text_type_main-medium mt-6 ${styles.title}`}>
          {name}
        </h3>
      </header>
      <p
        className={`text text_type_main-default mt-3 ${styles['success-order']}`}>
        {statusOrder}
      </p>
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
