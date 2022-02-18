import { FC } from 'react';
import styles from './order-item-list.module.css';
import { formatTime } from './format-time';

import { ListImgIgridients } from'./list-img-Igridients'
interface IOrderItemList {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export const OrderItemList: FC<IOrderItemList> = (props) => {
  const { createdAt, ingredients, name, number } = props;

  const data = formatTime(createdAt);
  return (
    <div className={`p-6 ${styles.container}`}>
      <header className={styles.title}>
        <p className='text text_type_digits-default'>{`#${number}`}</p>
        <p
          className={`text text_type_main-small text_color_inactive ${styles.time}`}
        >
          {data}
        </p>
      </header>
      <h3 className='text text_type_main-medium mt-6'>{name}</h3>
      <ListImgIgridients ArrIdIngredients={ingredients} />
    </div>
  );
};
