import { FC } from 'react';
import styles from './order-list.module.css';
import { formatTime } from 'utils/format-time'

import { ListImgIgridients } from './list-img-Igridients';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'services/types';
import { IDataProps } from 'utils/types';
import { Link, useLocation } from 'react-router-dom';

interface IOrderItemList {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  id: string;
}

const CLASS_NAME_TIME = `text text_type_main-small text_color_inactive ${styles.time}`;
const CLASS_NAME_PRICE = `${styles.price} text text_type_digits-default mr-3`;

export const OrderItem: FC<IOrderItemList> = props => {
  const location = useLocation();

  const { createdAt, ingredients, name, number, id } = props;

  const { listIgridients }: { listIgridients: IDataProps[] } = useSelector(
    store => store.igridients
  );

  const newIngredients = ingredients.filter(number => number);

  const price = newIngredients.reduce(
    (sum, id) => (sum += listIgridients.find(({ _id }) => _id === id).price),
    0
  );

  const data = formatTime(createdAt);

  return (
    <Link
      to={{
        pathname: `${location.pathname}/${id}`,
        state: { background: location },
      }}
      className={`p-6 ${styles.container}`}>
      <header className={styles.title}>
        <p className='text text_type_digits-default'>{`#${number}`}</p>
        <p className={CLASS_NAME_TIME}>{data}</p>
      </header>
      <h3 className='text text_type_main-medium mt-6'>{name}</h3>
      <div className={styles.wrapperList}>
        <ListImgIgridients ArrIdIngredients={newIngredients} />
        <p className={CLASS_NAME_PRICE}>{price}</p>
        <CurrencyIcon type='primary' />
      </div>
    </Link>
  );
};
