import { FC } from 'react';
import styles from './order-list.module.css';
import { formatTime } from './format-time';

import { ListImgIgridients } from './list-img-Igridients';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'services/types';
import { IDataProps } from 'utils/types';

interface IOrderItemList {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export const OrderItem: FC<IOrderItemList> = props => {
  const { createdAt, ingredients, name, number } = props;

  const { listIgridients }: { listIgridients: IDataProps[] } = useSelector(
    store => store.igridients
  );
  const price = ingredients.reduce(
    (sum, id) => (sum += listIgridients.find(({ _id }) => _id === id).price),
    0
  );

  const data = formatTime(createdAt);

  return (
    <div className={`p-6 ${styles.container}`}>
      <header className={styles.title}>
        <p className='text text_type_digits-default'>{`#${number}`}</p>
        <p
          className={`text text_type_main-small text_color_inactive ${styles.time}`}>
          {data}
        </p>
      </header>
      <h3 className='text text_type_main-medium mt-6'>{name}</h3>
      <div className={styles.wrapperList}>
        <ListImgIgridients ArrIdIngredients={ingredients} />
        <p className={`${styles.price} text text_type_digits-default mr-3`}>
          {price}
        </p>
        <CurrencyIcon type='primary' />
      </div>
    </div>
  );
};
