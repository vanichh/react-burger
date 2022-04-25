import { FC, ReactNode } from 'react';
import { IDataProps } from 'utils/types';
import styles from './order-list.module.css';
import cn from 'classnames';

interface IListImgIgridients {
  ArrIdIngredients: string[];
  listIgridients: IDataProps[];
  children?: ReactNode;
}
export const ListImgIgridients: FC<IListImgIgridients> = (props) => {
  const { ArrIdIngredients, listIgridients } = props;

  const ArrIgridients = ArrIdIngredients.map((id) =>
    listIgridients.find(({ _id }) => _id === id)
  );
  const countIgridients = ArrIgridients.length;

  let right = -16;
  let zIndex = 999;

  return (
    <ul className={styles.listIcon}>
      {ArrIgridients.slice(0, 6).map(({ image_mobile, name, _id }, i) => (
        <li
          className={cn(styles.item, { [styles.item__shadow]: i === 5 })}
          style={{ right: (right += 16), zIndex: (zIndex -= 1) }}
          key={_id + i}
        >
          <img className={styles.icon} src={image_mobile} alt={name} />
          {i === 5 && countIgridients > 6 ? (
            <p className={`text text_type_digits-default ${styles.counter}`}>
              +{countIgridients - 6}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
