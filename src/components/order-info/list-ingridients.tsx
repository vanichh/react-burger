import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, ReactNode } from 'react';
import { IDataProps } from 'utils/types';
import styles from './order-info.module.css';

interface IListIngridients {
  ingridientsOrder: [string, number][];
  listIgridients: IDataProps[];
  children?: ReactNode;
}

type TIngridients = Array<IDataProps & { count: number }>;

const CLASS_NAME_PRICE = `${styles.item__count} mr-4 text text_type_digits-default`;

export const ListIngridients: FC<IListIngridients> = (props) => {
  const { ingridientsOrder, listIgridients } = props;

  const arrIngridients: TIngridients = ingridientsOrder.map(([id, count]) => ({
    ...listIgridients.find(({ _id }) => _id === id),
    count,
  }));

  return (
    <ol className={`mb-10 pr-6 ${styles.list}`}>
      {arrIngridients.map(({ image_mobile, name, count, price, _id }) => (
        <li className={`mt-4 mb-4 ${styles.item}`} key={_id}>
          <div className={styles['item__icon-wrapper']}>
            <img src={image_mobile} alt={name} />
          </div>
          <p className='ml-4 mr-4 text text_type_main-default'>{name}</p>
          <p className={CLASS_NAME_PRICE}>{`${count} x ${price}`}</p>
          <div className={styles.icon}>
            <CurrencyIcon type='primary' />
          </div>
        </li>
      ))}
    </ol>
  );
};
