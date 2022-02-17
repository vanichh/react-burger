import { FC } from 'react';
import styles from './order-item-list.module.css'

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
  const { createdAt, ingredients, name, number, status } = props;
  return (
    <div className={`p-6 ${styles.container}`}>
      <header>
        <p className='text text_type_digits-default'>{`#${number}`}</p>
        <p></p>
      </header>
      <h3 className="text text_type_main-medium mt-6">{name}</h3>
    </div>
  );
};


